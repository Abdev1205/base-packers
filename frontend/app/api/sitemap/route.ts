import { NextResponse } from "next/server";

const SITE_URL = "https://basepackers.vercel.app/";

async function getAllTemplateSlugs() {
  try {
    const res = await fetch(`${SITE_URL}/api/v1/templates`);
    const { data } = await res.json();

    const slugs = data.map((item: any) => item.id);

    return slugs;
  } catch (error) {
    console.error("Error fetching template slugs:", error);
    return null;
  }
}

export async function GET() {
  try {
    const staticUrls = ["", "templates", "submit", "blog", "about"];
    const templateSlugs = await getAllTemplateSlugs(); // Fetch dynamic slugs
    console.log("templateSlugs", templateSlugs);

    if (!templateSlugs) {
      throw new Error("Failed to fetch template slugs");
    }

    const urls = [
      ...staticUrls.map((path) => `<url><loc>${SITE_URL}/${path}</loc></url>`),
      ...templateSlugs.map(
        (slug: string) => `<url><loc>${SITE_URL}/template/${slug}</loc></url>`
      ),
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls.join("\n")}
      </urlset>`;

    return new NextResponse(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error: any) {
    console.error("Error generating sitemap:", error);
    return new NextResponse(
      JSON.stringify({
        error: "Failed to generate sitemap",
        details: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

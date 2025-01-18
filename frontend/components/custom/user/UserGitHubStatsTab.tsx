import React from "react";
import rehypeSanitize from "rehype-sanitize";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { TabsContent } from "@radix-ui/react-tabs";

const UserGitHubStatsTab = ({ id }: { id: string }) => {
  return (
    <div>
      <div className=" flex w-full gap-[2rem] mt-[2rem]  ">
        <MarkdownPreview
          source={`[![GitHub Streak](https://github-readme-streak-stats-puce-delta.vercel.app?user=${id}&theme=apprentice&hide_border=true)]()`}
          className="   rounded-[2rem] "
          style={{
            backgroundColor: "transparent",
            borderRadius: "0rem",
          }}
          rehypePlugins={[rehypeSanitize]}
        />

        <MarkdownPreview
          source={`![](http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${id}&theme=apprentice)`}
          className="   rounded-[2rem] "
          style={{
            backgroundColor: "#171717",
            borderRadius: "2rem",
          }}
          rehypePlugins={[rehypeSanitize]}
        />
      </div>

      <div className=" flex w-full gap-[2rem] mt-[2rem]  ">
        <MarkdownPreview
          source={`![](http://github-profile-summary-cards.vercel.app/api/cards/stats?username=${id}&theme=apprentice)`}
          className="   rounded-[2rem] "
          style={{
            backgroundColor: "#171717",
            borderRadius: "2rem",
          }}
          rehypePlugins={[rehypeSanitize]}
        />

        <MarkdownPreview
          source={`![](http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${id}&theme=apprentice)`}
          className="   rounded-[2rem] "
          style={{
            backgroundColor: "#171717",
            borderRadius: "2rem",
          }}
          rehypePlugins={[rehypeSanitize]}
        />
        <MarkdownPreview
          source={`![](http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=${id}&theme=apprentice&utcOffset=8)`}
          className="   rounded-[2rem] "
          style={{
            backgroundColor: "#171717",
            borderRadius: "2rem",
          }}
          rehypePlugins={[rehypeSanitize]}
        />
      </div>

      <div className=" flex w-full gap-[2rem] mt-[2rem]  ">
        <MarkdownPreview
          source={`[![GitHub Streak](https://github-readme-activity-graph.vercel.app/graph?username=${id}&theme=apprentice&hide_border=true&area=true&bg_color=262626&color=bcbcbc&line=ffffaf&point=b07219)]()`}
          className="rounded-[2rem] "
          style={{
            backgroundColor: "transparent",
            borderRadius: "0rem",
          }}
          rehypePlugins={[rehypeSanitize]}
        />
      </div>
    </div>
  );
};

export default UserGitHubStatsTab;

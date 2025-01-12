import { Request, Response } from "express";
import prisma from "../../config/database.js";
import logger from "../../utils/logger.js";

const techStack = [
  {
    id: "1b31cec9-d381-4635-a25a-5ad90e508706",
    name: "React",
    tagValue: "react",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "797bccff-6931-4127-90a9-34177a78810b",
    name: "Next.js",
    tagValue: "next-js",
    imageUrl: "https://i.postimg.cc/VvvPmYSw/dango-inner-2.webp",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "a0958ae9-d9c7-4e2a-bccc-4148503231be",
    name: "Node.js",
    tagValue: "node-js",
    imageUrl: "https://i.postimg.cc/nhC5zRc4/nodejs-inner.webp",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "717b280b-6c80-4e1e-a24d-f60019ed2e57",
    name: "MongoDB",
    tagValue: "mongodb",
    imageUrl: "https://i.postimg.cc/wvH688cx/mongi.png",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "3ab37992-a4f4-461c-ac47-0d79f716cd4e",
    name: "Tailwind CSS",
    tagValue: "tailwind-css",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "810123c5-37d6-4dca-a6b0-d51b5e3441d7",
    name: "Docker",
    tagValue: "docker",
    imageUrl: "https://i.postimg.cc/B6Mfr8nN/97-Docker-logo-logos-512.png",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "0ec94471-425c-4adc-8aa2-f9e77e34e702",
    name: "TypeScript",
    tagValue: "typescript",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "188ab75e-364a-4c4f-8d41-a72be8d6e862",
    name: "Redis",
    tagValue: "redis",
    imageUrl: "https://i.postimg.cc/wjZrsX7S/Untitled-2-512.png",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "331b3379-5f16-4d64-aac0-42c5a240c047",
    name: "Firebase",
    tagValue: "firebase",
    imageUrl: "https://i.postimg.cc/fLhg8M7C/free-firebase-3521427-2944871.png",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "9dfaeabd-4c2c-4f92-b9b8-c0ffc441a9e7",
    name: "GraphQL",
    tagValue: "graphql",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "03debbbd-873e-435a-a34f-1f196e315e12",
    name: "AWS",
    tagValue: "aws",
    imageUrl: "https://i.postimg.cc/BvFV5jFt/aws-icon-2048x2048-ptyrjxdo.png",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "f0c26a2b-da51-4b47-9328-06e74eff8e2f",
    name: "Azure",
    tagValue: "azure",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "9723b1ca-884e-4062-a9f9-ec3e67bc26aa",
    name: "Kubernetes",
    tagValue: "kubernetes",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "3c4ce3a3-62f1-4513-a252-c22a927bcbd3",
    name: "PostgreSQL",
    tagValue: "postgresql",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "2587274f-709d-4bf1-bd2b-30718aa0fd4d",
    name: "Figma",
    tagValue: "figma",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "25a2d1f8-f23c-431e-b238-6276e78ab900",
    name: "Sentry",
    tagValue: "sentry",
    imageUrl: "https://i.postimg.cc/j2x3rvFJ/sentry-icon-512x460-s8hgd8yj.png",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "4201829a-d837-41bd-aa91-d56a821b4bee",
    name: "Webpack",
    tagValue: "webpack",
    imageUrl: "https://i.postimg.cc/Wz5WprBY/webpack-2.png",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "57d28553-5d66-4fa2-9064-473e7a8f8223",
    name: "Vite",
    tagValue: "vite",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "2b5628c7-75fb-4591-9249-dfa3c3256a8f",
    name: "Jest",
    tagValue: "jest",
    imageUrl: "https://i.postimg.cc/rFYnv1CK/jest-logo-png-transparent.png",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "58bb9874-e9a1-4ec2-9e4c-7619c2ef4948",
    name: "ESLint",
    tagValue: "eslint",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "37393fc9-cce9-4dd5-b95a-1485f77a74e9",
    name: "Git",
    tagValue: "git",
    imageUrl: "https://i.postimg.cc/VsgHFQJ9/2048px-Git-icon-svg.png",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "69f95b43-f1a8-460f-ba35-babf2879e4c4",
    name: "GitHub",
    tagValue: "github",
    imageUrl: "https://i.postimg.cc/qM7DbbKP/github-6980894-640.png",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "e1f02563-3952-49d4-b8e0-5d02275cf6ca",
    name: "Python",
    tagValue: "python",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "9a02d451-6df3-44c9-9a8e-dd6610054cf1",
    name: "Java",
    tagValue: "java",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "c37c8e2b-6d82-4894-92e9-fab42aa41174",
    name: "Prisma",
    tagValue: "prisma",
    imageUrl: "https://i.postimg.cc/Qx9NLbGz/prisma-removebg-preview.png",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "1b65b36f-7b9e-4b09-8ec7-85cc8dde497b",
    name: "Supabase",
    tagValue: "supabase",
    imageUrl:
      "https://i.postimg.cc/L5dSmdM0/647745152a2bc9017927e23a-supabase-logo.webp",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "ea68335e-041d-422e-9530-29419f678cd6",
    name: "Clerk",
    tagValue: "clerk",
    imageUrl:
      "https://i.postimg.cc/mkQsDdLZ/9d8bc340-e63d-11ee-b074-b5c8fe3ef189-clerk.webp",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "29de4d60-8330-43b4-85ae-82486748db59",
    name: "Appwrite",
    tagValue: "appwrite",
    imageUrl: "https://i.postimg.cc/5tTdmcjN/apple-icon-180x180.png",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "085a532c-fba0-4103-a9a0-0fffcff25e35",
    name: "Sanity.io",
    tagValue: "sanity-io",
    imageUrl:
      "https://i.postimg.cc/pXHv7tCm/appwrite-icon-1idza5li5qjkof1ekkd1q.png",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "82467cc8-71bf-428e-9911-0ac502e6a65d",
    name: "ElasticSearch",
    tagValue: "elasticsearch",
    imageUrl:
      "https://i.postimg.cc/mrJqxQYb/free-elastic-search-logo-icon-download-in-svg-png-gif-file-formats-technology-social-media-vol-2-pa.png",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "9c69f38d-ce53-4cbc-b071-71695906bece",
    name: "Cypress",
    tagValue: "cypress",
    imageUrl:
      "https://i.postimg.cc/1XZjXs72/cypress-icon-2048x2045-rgul477b.png",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "496910aa-d5cf-413c-878d-cfdc8596faa6",
    name: "Jira",
    tagValue: "jira",
    imageUrl: "https://i.postimg.cc/PrvCThnT/5968875.png",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "87a5f8eb-59ae-4ccc-b832-99333e0616a4",
    name: "Terraform",
    tagValue: "terraform",
    imageUrl:
      "https://i.postimg.cc/90tNqKvM/terraform-icon-1803x2048-hodrzd3t.png",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
  {
    id: "a3a5f94c-399c-41ca-ad66-6f20f3a04788",
    name: "RabbitMQ",
    tagValue: "rabbitmq",
    imageUrl:
      "https://i.postimg.cc/L62WM41Z/rabbitmq-icon-1936x2048-zlik4nni.png",
    createdAt: "2025-01-06T11:42:16.900Z",
    updatedAt: "2025-01-06T11:42:16.900Z",
  },
];
const transformedSkills = techStack.map((tech) => ({
  name: tech.name,
  tagValue: tech.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  imageUrl: tech.imageUrl,
}));

class SkillController {
  // Create a new skill
  static async createSkill(req: Request, res: Response) {
    const { name, tagValue, imageUrl } = req.body;

    try {
      const newSkill = await prisma.skill.create({
        data: {
          name,
          tagValue,
          imageUrl,
        },
      });
      return res
        .status(201)
        .json({ message: "Skill created successfully", data: newSkill });
    } catch (error) {
      logger.error(error);
      return res
        .status(500)
        .json({ error: "An error occurred while creating the skill" });
    }
  }

  static async createSkillInBulk(req: Request, res: Response) {
    const skills = transformedSkills; // Expecting an array of skill objects

    if (!Array.isArray(skills) || skills.length === 0) {
      return res.status(400).json({
        error: "Invalid input. Expecting a non-empty array of skills.",
      });
    }

    try {
      const createdSkills = await prisma.skill.createMany({
        data: skills,
        skipDuplicates: true, // Optional: Prevents errors if duplicates exist
      });

      res.status(201).json({
        message: "Skills created successfully",
        count: createdSkills.count,
      });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while creating skills" });
    }
  }

  // Get all skills
  static async getAllSkills(req: Request, res: Response) {
    try {
      const skills = await prisma.skill.findMany();
      return res.status(200).json({
        message: "Skills fetched successfully",
        data: skills,
        total: skills.length,
      });
    } catch (error) {
      logger.error(error);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching skills" });
    }
  }

  // Get a single skill by ID
  static async getSkillById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const skill = await prisma.skill.findUnique({
        where: { id },
      });

      if (!skill) {
        return res.status(404).json({ error: "Skill not found" });
      }

      return res
        .status(200)
        .json({ message: "Skill fetched successfully", data: skill });
    } catch (error) {
      logger.error(error);
      return res
        .status(500)
        .json({ error: "An error occurred while fetching the skill" });
    }
  }

  // Update a skill by ID
  static async updateSkill(req: Request, res: Response) {
    const { id } = req.params;
    const { name, tagValue, imageUrl } = req.body;

    try {
      const updatedSkill = await prisma.skill.update({
        where: { id },
        data: { name, tagValue, imageUrl },
      });

      return res
        .status(200)
        .json({ message: "Skill updated successfully", skill: updatedSkill });
    } catch (error) {
      logger.error(error);
      return res
        .status(500)
        .json({ error: "An error occurred while updating the skill" });
    }
  }

  // Delete a skill by ID
  static async deleteSkill(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await prisma.skill.delete({
        where: { id },
      });

      return res.status(200).json({ message: "Skill deleted successfully" });
    } catch (error) {
      logger.error(error);
      return res
        .status(500)
        .json({ error: "An error occurred while deleting the skill" });
    }
  }
}

export default SkillController;

import { Request, Response } from "express";
import prisma from "../../config/database.js";
import logger from "../../utils/logger.js";

const techStack = [
  {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Next.js",
    logo: "https://i.postimg.cc/VvvPmYSw/dango-inner-2.webp",
  },
  {
    name: "Node.js",
    logo: "https://i.postimg.cc/nhC5zRc4/nodejs-inner.webp",
  },
  {
    name: "MongoDB",
    logo: "https://i.postimg.cc/wvH688cx/mongi.png",
  },
  {
    name: "Tailwind CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "Docker",
    logo: "https://i.postimg.cc/B6Mfr8nN/97-Docker-logo-logos-512.png",
  },
  {
    name: "TypeScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    name: "Redis",
    logo: "https://i.postimg.cc/wjZrsX7S/Untitled-2-512.png",
  },
  {
    name: "Firebase",
    logo: "https://i.postimg.cc/fLhg8M7C/free-firebase-3521427-2944871.png",
  },
  {
    name: "GraphQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
  },
  {
    name: "AWS",
    logo: "https://i.postimg.cc/BvFV5jFt/aws-icon-2048x2048-ptyrjxdo.png",
  },
  {
    name: "Azure",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
  },
  {
    name: "Kubernetes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  },
  {
    name: "Figma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    name: "Sentry",
    logo: "https://i.postimg.cc/j2x3rvFJ/sentry-icon-512x460-s8hgd8yj.png",
  },
  {
    name: "Webpack",
    logo: "https://i.postimg.cc/Wz5WprBY/webpack-2.png",
  },
  {
    name: "Vite",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
  },
  {
    name: "Jest",
    logo: "https://i.postimg.cc/rFYnv1CK/jest-logo-png-transparent.png",
  },
  {
    name: "ESLint",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg",
  },
  {
    name: "Git",
    logo: "https://i.postimg.cc/VsgHFQJ9/2048px-Git-icon-svg.png",
  },
  {
    name: "GitHub",
    logo: "https://i.postimg.cc/qM7DbbKP/github-6980894-640.png",
  },
  {
    name: "Python",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    name: "Java",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  },
  {
    name: "Prisma",
    logo: "https://i.postimg.cc/Qx9NLbGz/prisma-removebg-preview.png",
  },
  {
    name: "Supabase",
    logo: "https://i.postimg.cc/L5dSmdM0/647745152a2bc9017927e23a-supabase-logo.webp",
  },
  {
    name: "Clerk",
    logo: "https://i.postimg.cc/mkQsDdLZ/9d8bc340-e63d-11ee-b074-b5c8fe3ef189-clerk.webp",
  },
  {
    name: "Appwrite",
    logo: "https://i.postimg.cc/5tTdmcjN/apple-icon-180x180.png",
  },
  {
    name: "Sanity.io",
    logo: "https://i.postimg.cc/pXHv7tCm/appwrite-icon-1idza5li5qjkof1ekkd1q.png",
  },
  {
    name: "ElasticSearch",
    logo: "https://i.postimg.cc/mrJqxQYb/free-elastic-search-logo-icon-download-in-svg-png-gif-file-formats-technology-social-media-vol-2-pa.png",
  },
  {
    name: "Cypress",
    logo: "https://i.postimg.cc/1XZjXs72/cypress-icon-2048x2045-rgul477b.png",
  },

  {
    name: "Jira",
    logo: "https://i.postimg.cc/PrvCThnT/5968875.png",
  },
  {
    name: "Terraform",
    logo: "https://i.postimg.cc/90tNqKvM/terraform-icon-1803x2048-hodrzd3t.png",
  },
  {
    name: "RabbitMQ",
    logo: "https://i.postimg.cc/L62WM41Z/rabbitmq-icon-1936x2048-zlik4nni.png",
  },
];
const transformedSkills = techStack.map((tech) => ({
  name: tech.name,
  tagValue: tech.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  imageUrl: tech.logo,
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
        // skipDuplicates: true, // Optional: Prevents errors if duplicates exist
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

import { Request, Response } from "express";
import prisma from "../../config/database.js";

class TemplateController {
  static async createTemplate(req: Request, res: Response) {
    try {
      const { name, description, guidelines, repo, tags, createdById } =
        req.body;

      // Validate required fields
      if (!name || !tags || tags.length === 0) {
        return res.status(400).json({
          success: false,
          message: "Name and at least one tag are required",
        });
      }

      // Upsert tags (skills) and prepare them for linking
      const upsertedTags = await Promise.all(
        tags.map(
          async (tag: {
            tagValue: string;
            name?: string;
            imageUrl?: string;
          }) => {
            return prisma.skill.upsert({
              where: { tagValue: tag.tagValue },
              create: {
                tagValue: tag.tagValue,
                name: tag.name || "",
                imageUrl: tag.imageUrl || null,
              },
              update: {},
            });
          }
        )
      );

      // Upsert GitHub repository if provided
      let repoData = null;
      if (repo) {
        const { id, owner, ...restRepo } = repo;

        const ownerData = await prisma.owner.upsert({
          where: { login: owner.login as string },
          create: {
            login: owner.login,
            avatarUrl: owner.avatarUrl,
            profileUrl: owner.profileUrl,
          },
          update: {
            avatarUrl: owner.avatarUrl,
            profileUrl: owner.profileUrl,
          },
        });
        // Upsert GitHub repo
        repoData = await prisma.gitRepo.upsert({
          where: { id },
          create: {
            id,
            ...restRepo,
            ownerId: ownerData.login,
          },
          update: {},
        });
      }

      // Create the template
      const template = await prisma.template.create({
        data: {
          name,
          description: description || null,
          guidelines: guidelines || null,
          repoId: repoData ? repoData.id : null,
          createdById,
          skills: {
            connect: upsertedTags.map((tag) => ({ id: tag.id })),
          },
        },
        include: {
          skills: true,
          repo: {
            include: {
              owner: true,
            },
          },
          createdBy: true,
        },
      });

      // Success response
      res.status(201).json({
        success: true,
        message: "Template created successfully",
        data: template,
      });
    } catch (error) {
      console.error("Error creating template:", error);
      res.status(500).json({
        success: false,
        message: "Failed to create template",
        error: error.message,
      });
    }
  }

  static async starTemplate(req: Request, res: Response) {
    try {
      const { id } = req.params; // Template ID
      const { userId } = req.body; // User ID from request body

      // Check if the template exists
      const templateExists = await prisma.template.findUnique({
        where: { id },
        include: { starredBy: true },
      });

      if (!templateExists) {
        return res.status(404).json({
          success: false,
          message: "Template not found",
        });
      }

      // Check if the user exists
      const userExists = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!userExists) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      // Check if the user has already starred the template
      const alreadyStarred = templateExists.starredBy.some(
        (user) => user.id === userId
      );

      let updatedTemplate;

      if (alreadyStarred) {
        // If already starred, remove the user from `starredBy` and decrement `starCount`
        updatedTemplate = await prisma.template.update({
          where: { id },
          data: {
            starCount: {
              decrement: 1,
            },
            starredBy: {
              disconnect: { id: userId },
            },
          },
          include: {
            skills: true,
            repo: {
              include: {
                owner: true,
              },
            },
            createdBy: true,
          },
        });
      } else {
        // If not starred, add the user to `starredBy` and increment `starCount`
        updatedTemplate = await prisma.template.update({
          where: { id },
          data: {
            starCount: {
              increment: 1,
            },
            starredBy: {
              connect: { id: userId },
            },
          },
          include: {
            skills: true,
            repo: {
              include: {
                owner: true,
              },
            },
            createdBy: true,
          },
        });
      }

      res.status(200).json({
        success: true,
        message: alreadyStarred
          ? "Template unstarred successfully"
          : "Template starred successfully",
        data: updatedTemplate,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Failed to star/unstar template",
        error: error.message,
      });
    }
  }

  static async getAllTemplates(req: Request, res: Response) {
    try {
      const { q, filter, sort } = req.query;

      // Base Prisma query configuration
      let query: any = {
        where: {},
        orderBy: {},
        include: {
          skills: true,
          repo: {
            include: {
              owner: true,
            },
          },
          createdBy: true,
          starredBy: true,
        },
      };

      // Add search condition (q)
      if (q) {
        query.where.OR = [
          { name: { contains: q as string, mode: "insensitive" } },
          { description: { contains: q as string, mode: "insensitive" } },
          {
            skills: {
              some: {
                tagValue: { contains: q as string, mode: "insensitive" },
              },
            },
          },
        ];
      }

      // Add filter condition (filter)
      if (filter) {
        const filterArray = (filter as string).split(",");
        query.where.skills = {
          some: {
            tagValue: { in: filterArray }, // here also just macthes then also we have to return
          },
        };
      }

      // Add sort condition (sort)
      if (sort === "popular") {
        query.orderBy = {
          starCount: "desc",
        };
      } else if (sort === "newest") {
        query.orderBy = {
          createdAt: "desc",
        };
      } else if (sort === "oldest") {
        query.orderBy = {
          createdAt: "asc",
        };
      } else {
        // Default to newest if no sort option is provided
        query.orderBy = {
          createdAt: "desc",
        };
      }

      // Fetch templates with Prisma
      const templates = await prisma.template.findMany(query);

      res.status(200).json({
        success: true,
        data: templates,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch templates",
        error: error.message,
      });
    }
  }

  static async getTemplateById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const template = await prisma.template.findUnique({
        where: { id },
        include: {
          skills: true,
          repo: {
            include: {
              owner: true,
            },
          },
          createdBy: true,
          starredBy: true,
        },
      });

      if (!template) {
        return res.status(404).json({
          success: false,
          message: "Template not found",
        });
      }

      res.status(200).json({
        success: true,
        data: template,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch template",
        error: error.message,
      });
    }
  }

  static async getTemplatesByUserId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const templatesCreated = await prisma.template.findMany({
        where: {
          createdBy: {
            username: id,
          },
        },
        include: {
          skills: true,
          repo: {
            include: {
              owner: true,
            },
          },
          createdBy: true,
          starredBy: true,
        },
      });

      const templateStarred = await prisma.template.findMany({
        where: {
          starredBy: {
            some: {
              username: id,
            },
          },
        },
        include: {
          skills: true,
          repo: {
            include: {
              owner: true,
            },
          },
          createdBy: true,
          starredBy: true,
        },
      });

      res.status(200).json({
        success: true,
        templatesCreated,
        templateStarred,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch templates",
        error: error.message,
      });
    }
  }
}

export default TemplateController;

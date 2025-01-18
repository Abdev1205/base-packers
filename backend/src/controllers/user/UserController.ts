import { Request, Response } from "express";
import prisma from "../../config/database.js";
import logger from "../../utils/logger.js";

class UserController {
  static async getUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      // Check if ID is provided
      if (!id) {
        return res.status(400).json({ message: "User ID is required." });
      }

      // Fetch the user data
      const user = await prisma.user.findUnique({
        where: {
          username: id, // Assuming "id" corresponds to the "username" field
        },
        include: {
          starredTemplates: true, // Includes starred templates

          createdTemplates: true, // Includes created templates
        },
      });

      // If user not found, return a 404 error
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      // Success response
      return res
        .status(200)
        .json({ message: "User fetched successfully.", data: user });
    } catch (error) {
      console.error("Error fetching user:", error);
      return res.status(500).json({ message: "Internal server error." });
    }
  }

  static async getUserProfile(req: Request, res: Response) {
    try {
      const { username } = req.params;

      if (!username) {
        return res.status(400).json({ message: "Username is required." });
      }

      const user = await prisma.user.findUnique({
        where: {
          username,
        },
      });

      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }

      return res.status(200).json({
        message: "User profile fetched successfully.",
        data: user,
      });
    } catch (error) {
      console.error("Error fetching user profile:", error);
      return res.status(500).json({ message: "Internal server error." });
    }
  }

  static async updateUserProfile(req: Request, res: Response) {
    try {
      const { username, name, about } = req.body;

      // Check if username is provided
      if (!username) {
        return res.status(400).json({ message: "Username is required." });
      }

      const updatedUser = await prisma.user.update({
        where: {
          username,
        },
        data: {
          name,
          about,
        },
      });

      console.table(req.body);

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found." });
      }

      return res.status(200).json({
        message: "User profile updated successfully.",
        data: updatedUser,
      });
    } catch (error) {
      logger.error("Error updating user profile:", error);
      return res.status(500).json({ message: "Internal server error." });
    }
  }
}

export default UserController;

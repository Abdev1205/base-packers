import { Request, Response } from "express";
import prisma from "../../config/database.js";

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
          starredTemplates: {
            include: {
              repo: true, // Adjusted to "repo" as per your model field
            },
          },
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
}

export default UserController;

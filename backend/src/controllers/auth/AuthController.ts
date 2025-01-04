import axios from "axios";
import { Request, Response } from "express";
import ENV from "../../config/ENV.js";
import clerkClient from "../../config/clerk.config.js";

class AuthController {
  static async getGithubToken(id: string) {
    const userId = id;

    if (!userId) {
      return new Error("User ID not provided");
    }

    try {
      // Fetch the GitHub token from Clerk
      const response = await axios.get(
        `https://api.clerk.com/v1/users/${userId}/oauth_access_tokens/github`,
        {
          headers: {
            Authorization: `Bearer ${ENV.CLERK_API_KEY}`,
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        const token = response.data[0]?.token;

        if (!token) {
          return new Error("GitHub token not found in Clerk");
        }

        console.log("Acces token ", token);

        // Update public metadata in Clerk
        await clerkClient.users.updateUserMetadata(userId, {
          publicMetadata: {
            githubToken: token,
          },
        });

        console.log({ message: "GitHub token stored successfully." });
      } else {
        console.log({ message: "Failed to fetch GitHub token." });
      }
    } catch (error) {
      console.error("Error updating GitHub token in Clerk:", error);
    }
  }
}

export default AuthController;

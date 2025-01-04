import { Request, Response } from "express";
import prisma from "../../config/database.js";
import { Webhook, WebhookRequiredHeaders } from "svix";
import ENV from "../../config/ENV.js";
import { WebhookEvent } from "@clerk/clerk-sdk-node";
import AuthController from "./AuthController.js";

class ClerkAccountWebhook {
  static async handleWebhook(req: Request, res: Response) {
    const CLERK_SIGNING_SECRET = ENV.CLERK_SIGNING_SECRET;

    if (!CLERK_SIGNING_SECRET) {
      res
        .status(500)
        .send({ message: "Missing CLERK_SIGNING_SECRET environment variable" });
    }

    try {
      const svix = new Webhook(CLERK_SIGNING_SECRET); // Initialize Svix with the signing secret

      const svixHeaders: WebhookRequiredHeaders = {
        "svix-id": req.headers["svix-id"] as string,
        "svix-timestamp": req.headers["svix-timestamp"] as string,
        "svix-signature": req.headers["svix-signature"] as string,
      };

      if (
        !svixHeaders["svix-id"] ||
        !svixHeaders["svix-timestamp"] ||
        !svixHeaders["svix-signature"]
      ) {
        return res.status(400).send({ message: "Missing required headers" });
      }

      const payload = req.body;

      // Verify the webhook
      const event = svix.verify(
        JSON.stringify(payload),
        svixHeaders
      ) as WebhookEvent;

      if (!event) {
        return res.status(400).send({ message: "Invalid webhook signature" });
      }

      const { type, data } = event;

      console.log("webhook recived ", type);

      switch (type) {
        case "user.created":
          await ClerkAccountWebhook.handleUserCreated(data);
          break;

        case "user.updated":
          await ClerkAccountWebhook.handleUserUpdated(data);
          break;

        case "user.deleted":
          await ClerkAccountWebhook.handleUserDeleted(data);
          break;

        default:
          console.log(`Unhandled event type: ${type}`);
      }

      res.status(200).send({ message: "Webhook processed successfully." });
    } catch (error) {
      console.error("Error processing webhook:", error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  }

  static async handleUserCreated(data: any) {
    console.log("Handle User created is called");
    if (!data) {
      return new Error("Missing user data");
    }

    const {
      id,
      first_name,
      last_name,
      email_addresses,
      username,
      profile_image_url,
    } = data;

    const email = email_addresses?.[0]?.email_address || null;

    const existingUser = await prisma.user.findUnique({
      where: { id, email },
    });

    if (existingUser) {
      return new Error(`User already exists: ${id}`);
    }

    await prisma.user.create({
      data: {
        id,
        name: `${first_name} ${last_name}`.trim(),
        email,
        username,
        avatar: profile_image_url,
      },
    });
    await AuthController.getGithubToken(id);

    console.log(`User created: ${id}`);
  }

  static async handleUserUpdated(data: any) {
    const {
      id,
      first_name,
      last_name,
      email_addresses,
      username,
      profile_image_url,
    } = data;

    const email = email_addresses?.[0]?.email_address || null;

    try {
      await prisma.user.update({
        where: { id },
        data: {
          name: `${first_name} ${last_name}`.trim(),
          email,
          username,
          avatar: profile_image_url,
        },
      });

      console.log(`User updated: ${id}`);
    } catch (error) {
      return new Error(`Failed to update user: ${id}`);
    }
  }

  static async handleUserDeleted(data: any) {
    const { id } = data;

    try {
      if (!id) {
        return new Error("Missing user ID");
      }

      const user = await prisma.user.findUnique({
        where: { id },
      });

      if (!user) {
        return new Error(`User not found: ${id}`);
      }

      await prisma.user.delete({
        where: { id },
      });

      console.log(`User deleted: ${id}`);
    } catch (error) {
      return new Error(`Failed to delete user: ${id}`);
    }
  }
}

export default ClerkAccountWebhook;

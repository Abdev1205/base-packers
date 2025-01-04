import { Router, Request, Response } from "express";
import ClerkAccountWebhook from "../../controllers/auth/ClerkWebhook.js";
import AuthController from "../../controllers/auth/AuthController.js";

const router = Router();

router.post("/webhook/clerk", ClerkAccountWebhook.handleWebhook);
router.post("/token/github", AuthController.getGithubToken);

export default router;

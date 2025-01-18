import { Router } from "express";
import UserController from "../../controllers/user/UserController.js";

const router = Router();

router.get("/:id", UserController.getUserById);
router.get("/profile/:username", UserController.getUserProfile);
router.put("/profile/:username", UserController.updateUserProfile);

export default router;

import { Router } from "express";
import TemplateController from "../../controllers/template/TemplateController.js";

const router = Router();

router.post("/", TemplateController.createTemplate);
router.get("/", TemplateController.getAllTemplates);
router.post("/:id/star", TemplateController.starTemplate);
router.get("/:id", TemplateController.getTemplateById);
router.get("/user/:id", TemplateController.getTemplatesByUserId);

export default router;

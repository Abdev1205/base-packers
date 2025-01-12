import { Router } from "express";
import TemplateController from "../../controllers/template/TemplateController.js";

const router = Router();

router.post("/", TemplateController.createTemplate);
router.get("/", TemplateController.getAllTemplates);
router.post("/:id/star", TemplateController.starTemplate);
router.get("/:id", TemplateController.getTemplateById);

export default router;

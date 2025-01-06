import { Router } from "express";
import SkillController from "../../controllers/skill/SkillContoller.js";

const router = Router();

router.post("/", SkillController.createSkill);
router.post("/bulk", SkillController.createSkillInBulk);
router.get("/", SkillController.getAllSkills);
router.get("/:id", SkillController.getSkillById);

export default router;

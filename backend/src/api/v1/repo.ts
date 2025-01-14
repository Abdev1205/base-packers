import { Router } from "express";
import RepoController from "../../controllers/repo/RepoController.js";

const router = Router();

router.get("/", RepoController.getAllRepo);
router.get("/:owner/:repo/readme", RepoController.getReadme);

export default router;

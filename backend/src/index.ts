import express, { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import AuthRoutes from "./api/v1/auth.js";
import SkillsRoutes from "./api/v1/skill.js";
import ReposRoutes from "./api/v1/repo.js";
import morganMiddleware from "./middleware/morgan.middleware.js";
import ENV from "./config/ENV.js";
const app: Application = express();
const PORT = process.env.PORT || 4000;

// * Middleware
app.use(
  cors({
    origin: [ENV.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morganMiddleware);
app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/skills", SkillsRoutes);
app.use("/api/v1/repos", ReposRoutes);

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

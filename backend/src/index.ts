import express, { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import AuthRoutes from "./api/v1/auth.js";
import SkillsRoutes from "./api/v1/skill.js";
import ReposRoutes from "./api/v1/repo.js";
import TemplateRoutes from "./api/v1/template.js";
import UserRoutes from "./api/v1/user.js";
import morganMiddleware from "./middleware/morgan.middleware.js";
import ENV from "./config/ENV.js";
const app: Application = express();
const PORT = process.env.PORT || 4000;

// * Middleware
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
  allowedHeaders: [
    "Authorization",
    "Content-Type",
    "Accept",
    "Cache-Control",
    "DNT",
    "If-Modified-Since",
    "Keep-Alive",
    "Origin",
    "User-Agent",
    "X-Requested-With",
    "company-code",
  ],
  exposedHeaders: ["Content-Length", "Content-Range"],
  optionsSuccessStatus: 204, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// app.use(
//   cors({
//     origin: [ENV.FRONTEND_URL, "https://basepackers.vercel.app"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morganMiddleware);
app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/skills", SkillsRoutes);
app.use("/api/v1/repos", ReposRoutes);
app.use("/api/v1/templates", TemplateRoutes);
app.use("/api/v1/users", UserRoutes);

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

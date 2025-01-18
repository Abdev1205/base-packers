import { Request, Response } from "express";
import logger from "../../utils/logger.js";
import axios from "axios";
import { GitRepo } from "../../types/index.js";

class RepoController {
  static async getAllRepo(req: Request, res: Response) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res
          .status(401)
          .send({ message: "Unauthorized Token is not there" });
      }

      const response = await axios.get(
        `https://api.github.com/user/repos?per_page=${500}&page=${1}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github.v3+json",
          },
        }
      );

      // Map the API response to the required fields based on the Repository interface
      const repos = response.data.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        htmlUrl: repo.html_url as string,
        topics: repo.topics || [], // Ensure topics is always an array
        cloneUrl: repo.clone_url,
        language: repo.language,
        stargazersCount: repo.stargazers_count,
        owner: {
          login: repo.owner.login,
          avatarUrl: repo.owner.avatar_url,
          profileUrl: repo.owner.html_url,
        },
        defaultBranch: repo.default_branch,
        updatedAt: repo.updated_at,
        size: repo.size,
        license: repo.license ? repo.license.name : null,
        forksCount: repo.forks_count,
      }));

      return res.status(200).send({
        message: "Successfully fetched all repos",
        data: repos,
        total: repos.length,
      });
    } catch (error: any) {
      logger.error(error.message);
      return res.status(500).send({ message: "Failed to fetch repos" });
    }
  }

  static async getReadme(req: Request, res: Response) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res
          .status(401)
          .send({ message: "Unauthorized Token is not there" });
      }

      const { owner, repo } = req.params;

      const response = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/contents/README.md`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github.v3+json",
          },
        }
      );
      const readmeContent = Buffer.from(
        response?.data?.content,
        "base64"
      ).toString("utf-8");

      return res.status(200).send({
        message: "Successfully fetched readme",
        data: readmeContent,
      });
    } catch (error: any) {
      logger.error(error.message);
      return res.status(500).send({ message: "Failed to fetch readme" });
    }
  }
}

export default RepoController;

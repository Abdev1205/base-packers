import { Request, Response } from "express";
import logger from "../../utils/logger.js";
import axios from "axios";
import { GitRepo } from "../../types/index.js";
import AuthController from "../auth/AuthController.js";
import processGitRepo from "../../utils/processGitRepo.js";

class RepoController {
  static async getAllRepo(req: Request, res: Response) {
    const { userId } = req.params;

    // If no user Id is provided, return a 400 error
    if (!userId) {
      return res.status(400).send({ message: "User ID is required" });
    }

    // trying first time with clerk github token
    try {
      // If no token is provided which mean un authorized user is calling the api
      const token = req?.headers?.authorization?.split(" ")[1];
      if (!token) {
        return res
          .status(401)
          .send({ message: "Unauthorized Token is not there" });
      }

      // Now User have toke so trying to get repo in first attempt
      let response;
      try {
        response = await axios.get(
          `https://api.github.com/user/repos?per_page=${500}&page=${1}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/vnd.github.v3+json",
            },
          }
        );
      } catch (error) {
        // here First Attempt is failed so we have to try to get new token from github
        if (error.message === "Request failed with status code 401") {
          console.log({
            message:
              "Unauthorized Token Or Expired Token we Need to re fectch the token from github",
          });
        }

        // trying to get new token from github
        const newToken = await AuthController.getGithubToken(userId);

        if (!newToken) {
          return res
            .status(401)
            .send({ message: "Unauthorized Token is not there" });
        }
        console.log("TOken in Repos COntroller ", newToken);

        // i may have new token so trying to get the repos in second attempt
        try {
          let newresponse = await axios.get(
            `https://api.github.com/user/repos?per_page=${500}&page=${1}`,
            {
              headers: {
                Authorization: `Bearer ${newToken}`,
                Accept: "application/vnd.github.v3+json",
              },
            }
          );
          // if new reposen is ok and then we can process the repos and send the response
          if (newresponse.status === 200 && newresponse?.data) {
            const repo = processGitRepo(newresponse);
            if (!repo) {
              return res.status(500).send({
                message:
                  "Failed to process the repos after trying new token and getting repos",
              });
            }
            return res.status(200).send({
              message: "Successfully fetched all repos after new Token",
              data: repo,
              total: repo?.length,
            });
          }
          console.log("Token Scopes:", newresponse.headers["x-oauth-scopes"]);
          console.log(
            "Rate Limit Remaining:",
            newresponse.headers["x-ratelimit-remaining"]
          );
          console.log("GitHub API Response: insidde trye ", newresponse.data);
        } catch (error) {
          // failed to get repos after new repo which means issue is there from the github api
          return res.status(500).send({
            message: "Failed to fetch repos after trying new token ",
            error,
          });
        }
      }

      // Map the API response to the required fields based on the Repository interface
      const repos = processGitRepo(response);

      return res.status(200).send({
        message: "Successfully fetched all repos",
        data: repos,
        total: repos.length,
      });
    } catch (error: any) {
      logger.error(error.message);
      return res.status(500).send({ message: "Failed to fetch repos", error });
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

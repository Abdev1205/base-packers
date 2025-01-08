"use client";

import api from "@/config/api";
import ENV from "@/config/ENV";
import toast from "react-hot-toast";

const getAllRepo = async (token: string) => {
  try {
    if (!token) {
      return;
    }
    const res = await api.get(ENV.REPO_API_URL as string, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });
    return res.data;
  } catch (error) {
    return new Error("Failed to fetch repo");
  }
};

const getReadme = async (token: string, repoName: string, owner: string) => {
  try {
    if (!token || !repoName || !owner) {
      return;
    }
    const res = await api.get(
      `${ENV.REPO_API_URL as string}/${owner}/${repoName}/readme`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
    toast.success("Readme imported successfully");
    return res.data;
  } catch (error) {
    toast.error("Readme is not available for this repo");
    return new Error("Failed to fetch readme");
  }
};

export { getAllRepo, getReadme };

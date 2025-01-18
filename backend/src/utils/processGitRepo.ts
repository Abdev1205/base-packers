import { GitRepo } from "../types/index.js";

const processGitRepo = (response: any): GitRepo[] => {
  const repos = response?.data?.map((repo: any) => ({
    id: repo?.id,
    name: repo?.name,
    description: repo?.description,
    htmlUrl: repo?.html_url as string,
    topics: repo?.topics || [], // Ensure topics is always an array
    cloneUrl: repo?.clone_url,
    language: repo?.language,
    stargazersCount: repo?.stargazers_count,
    owner: {
      login: repo?.owner?.login,
      avatarUrl: repo?.owner?.avatar_url,
      profileUrl: repo?.owner?.html_url,
    },
    defaultBranch: repo?.default_branch,
    updatedAt: repo?.updated_at,
    size: repo?.size,
    license: repo?.license ? repo?.license.name : null,
    forksCount: repo?.forks_count,
  }));
  return repos;
};

export default processGitRepo;

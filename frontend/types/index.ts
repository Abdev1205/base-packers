export type SkillTagtype = {
  id: number;
  name: string;
  tagValue: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

export interface GitRepo {
  id: number; // Unique identifier for the repository
  name: string; // Name of the repository
  description: string | null; // Brief overview of the repository
  htmlUrl: string; // URL to view the repository on GitHub
  topics: string[]; // Array of topics or tags associated with the repository
  cloneUrl: string; // URL for cloning the repository
  language: string | null; // Primary programming language of the repository
  stargazersCount: number; // Number of stars the repository has
  owner: {
    login: string; // Username of the repository owner
    avatarUrl: string; // Avatar URL of the repository owner
    profileUrl: string; // URL to the owner's GitHub profile
  };
  defaultBranch: string; // Default branch name for the repository
  updatedAt: string; // Last updated timestamp (ISO format)
  size: number; // Size of the repository in KB
  license: string | null; // License type, if any
  forksCount: number; // Number of forks of the repository
}

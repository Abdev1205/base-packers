export type SkillTagtype = {
  id: string | number;
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

export interface TemplateApiRes {
  id: string;
  name: string;
  description: string;
  guidelines: string;
  repoId: number;
  createdById: string;
  starCount: number;
  createdAt: string;
  updatedAt: string;
  starredBy: string[];
  skills: SkillTagtype[];
  repo: {
    id: number;
    name: string;
    description: string;
    htmlUrl: string;
    topics: string[];
    cloneUrl: string;
    language: string;
    stargazersCount: number;
    ownerId: string;
    defaultBranch: string;
    updatedAt: string;
    size: number;
    license: null;
    forksCount: number;
    owner: {
      id: number;
      login: string;
      avatarUrl: string;
      profileUrl: string;
    };
  };
  createdBy: {
    id: string;
    name: string;
    email: string;
    username: string;
    avatar: string;
    createdAt: string;
    updatedAt: string;
  };
}

export type TemplateCardDataType = {
  id: number | string;
  title: string;
  description: string;
  tags: SkillTagtype[];
  stars: number;
  guidelines?: string;
  author: {
    name: string;
    avatar?: string;
    githubUrl: string;
    username?: string;
  };
  repoUrl: string;
  lastUpdated: string;
  actions: {
    preview: string;
    star: boolean;
  };
};

export interface UserDataApiRes {
  id: string;
  name: string;
  email: string;
  username: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
  description?: string;
  starredTemplates: {
    id: string;
    name: string;
    description: string;
    guidelines: string;
    repoId: number;
    createdById: string;
    starCount: number;
    createdAt: string;
    updatedAt: string;
  }[];
  createdTemplates: {
    id: string;
    name: string;
    description: string;
    guidelines: string;
    repoId: number;
    createdById: string;
    starCount: number;
    createdAt: string;
    updatedAt: string;
  }[];
}

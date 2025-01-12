import { TemplateApiRes, TemplateCardDataType } from "@/types";
import React from "react";

const processTemplateData = ({
  data,
  userId,
}: {
  data: TemplateApiRes[];
  userId: string;
}) => {
  return (
    data &&
    (data?.map((template: TemplateApiRes) => {
      return {
        id: template.id,
        title: template.name,
        description: template.description,
        tags: template.skills,
        stars: template.starCount,
        guidelines: template?.guidelines || "",
        author: {
          name: template.createdBy.name,
          avatar: template.createdBy.avatar,
          githubUrl: template.repo.owner.profileUrl,
          username: template.createdBy.username,
        },
        repoUrl: template.repo.htmlUrl,
        lastUpdated: template.updatedAt,
        actions: {
          preview: template.repo.htmlUrl,
          star: template?.starredBy.find((starred: any) => starred.id == userId)
            ? true
            : false,
        },
      };
    }) as TemplateCardDataType[])
  );
};

export default processTemplateData;

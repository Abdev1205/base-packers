/*
  Warnings:

  - You are about to drop the column `repoDescription` on the `Template` table. All the data in the column will be lost.
  - You are about to drop the column `repoForks` on the `Template` table. All the data in the column will be lost.
  - You are about to drop the column `repoLanguage` on the `Template` table. All the data in the column will be lost.
  - You are about to drop the column `repoName` on the `Template` table. All the data in the column will be lost.
  - You are about to drop the column `repoOwner` on the `Template` table. All the data in the column will be lost.
  - You are about to drop the column `repoStars` on the `Template` table. All the data in the column will be lost.
  - You are about to drop the column `repoUrl` on the `Template` table. All the data in the column will be lost.
  - You are about to drop the `_TemplateSkills` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_TemplateSkills" DROP CONSTRAINT "_TemplateSkills_A_fkey";

-- DropForeignKey
ALTER TABLE "_TemplateSkills" DROP CONSTRAINT "_TemplateSkills_B_fkey";

-- AlterTable
ALTER TABLE "Template" DROP COLUMN "repoDescription",
DROP COLUMN "repoForks",
DROP COLUMN "repoLanguage",
DROP COLUMN "repoName",
DROP COLUMN "repoOwner",
DROP COLUMN "repoStars",
DROP COLUMN "repoUrl",
ADD COLUMN     "guidelines" TEXT,
ADD COLUMN     "repoId" INTEGER;

-- DropTable
DROP TABLE "_TemplateSkills";

-- CreateTable
CREATE TABLE "GitRepo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "htmlUrl" TEXT NOT NULL,
    "topics" TEXT[],
    "cloneUrl" TEXT NOT NULL,
    "language" TEXT,
    "stargazersCount" INTEGER NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "defaultBranch" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "size" INTEGER NOT NULL,
    "license" TEXT,
    "forksCount" INTEGER NOT NULL,

    CONSTRAINT "GitRepo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Owner" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "avatarUrl" TEXT NOT NULL,
    "profileUrl" TEXT NOT NULL,

    CONSTRAINT "Owner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SkillToTemplate" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_SkillToTemplate_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_SkillToTemplate_B_index" ON "_SkillToTemplate"("B");

-- AddForeignKey
ALTER TABLE "Template" ADD CONSTRAINT "Template_repoId_fkey" FOREIGN KEY ("repoId") REFERENCES "GitRepo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GitRepo" ADD CONSTRAINT "GitRepo_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillToTemplate" ADD CONSTRAINT "_SkillToTemplate_A_fkey" FOREIGN KEY ("A") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SkillToTemplate" ADD CONSTRAINT "_SkillToTemplate_B_fkey" FOREIGN KEY ("B") REFERENCES "Template"("id") ON DELETE CASCADE ON UPDATE CASCADE;

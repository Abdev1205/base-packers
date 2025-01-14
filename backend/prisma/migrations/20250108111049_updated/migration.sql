/*
  Warnings:

  - Added the required column `repoName` to the `Template` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repoOwner` to the `Template` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repoUrl` to the `Template` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Template" ADD COLUMN     "repoDescription" TEXT,
ADD COLUMN     "repoForks" INTEGER,
ADD COLUMN     "repoLanguage" TEXT,
ADD COLUMN     "repoName" TEXT NOT NULL,
ADD COLUMN     "repoOwner" TEXT NOT NULL,
ADD COLUMN     "repoStars" INTEGER,
ADD COLUMN     "repoUrl" TEXT NOT NULL;

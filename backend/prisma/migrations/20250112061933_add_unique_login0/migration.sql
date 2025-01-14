/*
  Warnings:

  - A unique constraint covering the columns `[login]` on the table `Owner` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "GitRepo" DROP CONSTRAINT "GitRepo_ownerId_fkey";

-- AlterTable
ALTER TABLE "GitRepo" ALTER COLUMN "ownerId" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Owner_login_key" ON "Owner"("login");

-- AddForeignKey
ALTER TABLE "GitRepo" ADD CONSTRAINT "GitRepo_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Owner"("login") ON DELETE RESTRICT ON UPDATE CASCADE;

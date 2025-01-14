/*
  Warnings:

  - A unique constraint covering the columns `[tagValue]` on the table `Skill` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Skill_tagValue_key" ON "Skill"("tagValue");

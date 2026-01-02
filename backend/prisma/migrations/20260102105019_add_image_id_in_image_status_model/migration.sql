/*
  Warnings:

  - Added the required column `imageId` to the `ImageStatus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ImageStatus" ADD COLUMN     "imageId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Player" ALTER COLUMN "score" SET DEFAULT 0;

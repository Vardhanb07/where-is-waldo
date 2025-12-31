/*
  Warnings:

  - Made the column `completedSnaps` on table `ImageStatus` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ImageStatus" ALTER COLUMN "completedSnaps" SET NOT NULL;

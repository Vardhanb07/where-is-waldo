/*
  Warnings:

  - You are about to drop the column `snapOneStatus` on the `ImageStatus` table. All the data in the column will be lost.
  - You are about to drop the column `snapThreeStatus` on the `ImageStatus` table. All the data in the column will be lost.
  - You are about to drop the column `snapTwoStatus` on the `ImageStatus` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ImageStatus" DROP COLUMN "snapOneStatus",
DROP COLUMN "snapThreeStatus",
DROP COLUMN "snapTwoStatus",
ADD COLUMN     "snapId" INTEGER;

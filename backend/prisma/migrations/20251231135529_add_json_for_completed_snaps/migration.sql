/*
  Warnings:

  - The primary key for the `ImageStatus` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `imageId` on the `ImageStatus` table. All the data in the column will be lost.
  - You are about to drop the column `snapId` on the `ImageStatus` table. All the data in the column will be lost.
  - You are about to drop the `snapStatus` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `completedSnaps` to the `ImageStatus` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ImageStatus" DROP CONSTRAINT "ImageStatus_snapId_fkey";

-- AlterTable
ALTER TABLE "ImageStatus" DROP CONSTRAINT "ImageStatus_pkey",
DROP COLUMN "imageId",
DROP COLUMN "snapId",
ADD COLUMN     "completedSnaps" JSONB NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ImageStatus_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "snapStatus";

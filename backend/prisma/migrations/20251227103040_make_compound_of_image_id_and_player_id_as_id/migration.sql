/*
  Warnings:

  - The primary key for the `ImageStatus` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ImageStatus` table. All the data in the column will be lost.
  - Made the column `playerId` on table `ImageStatus` required. This step will fail if there are existing NULL values in that column.
  - Made the column `imageId` on table `ImageStatus` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ImageStatus" DROP CONSTRAINT "ImageStatus_playerId_fkey";

-- AlterTable
ALTER TABLE "ImageStatus" DROP CONSTRAINT "ImageStatus_pkey",
DROP COLUMN "id",
ALTER COLUMN "playerId" SET NOT NULL,
ALTER COLUMN "imageId" SET NOT NULL,
ADD CONSTRAINT "ImageStatus_pkey" PRIMARY KEY ("playerId", "imageId");

-- AddForeignKey
ALTER TABLE "ImageStatus" ADD CONSTRAINT "ImageStatus_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

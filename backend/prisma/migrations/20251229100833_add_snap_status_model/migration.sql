/*
  Warnings:

  - Made the column `snapId` on table `ImageStatus` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ImageStatus" ALTER COLUMN "snapId" SET NOT NULL;

-- CreateTable
CREATE TABLE "snapStatus" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "snapId" INTEGER NOT NULL,

    CONSTRAINT "snapStatus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "snapStatus_snapId_key" ON "snapStatus"("snapId");

-- AddForeignKey
ALTER TABLE "ImageStatus" ADD CONSTRAINT "ImageStatus_snapId_fkey" FOREIGN KEY ("snapId") REFERENCES "snapStatus"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

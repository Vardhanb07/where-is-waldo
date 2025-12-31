-- DropForeignKey
ALTER TABLE "ImageStatus" DROP CONSTRAINT "ImageStatus_snapId_fkey";

-- AlterTable
ALTER TABLE "ImageStatus" ALTER COLUMN "snapId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ImageStatus" ADD CONSTRAINT "ImageStatus_snapId_fkey" FOREIGN KEY ("snapId") REFERENCES "snapStatus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

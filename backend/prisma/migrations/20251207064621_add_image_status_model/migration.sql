-- CreateTable
CREATE TABLE "ImageStatus" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "snapOneStatus" BOOLEAN NOT NULL DEFAULT false,
    "snapTwoStatus" BOOLEAN NOT NULL DEFAULT false,
    "snapThreeStatus" BOOLEAN NOT NULL DEFAULT false,
    "playerId" INTEGER,

    CONSTRAINT "ImageStatus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ImageStatus" ADD CONSTRAINT "ImageStatus_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE SET NULL ON UPDATE CASCADE;

/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[email]` on the table `Client`. If there are existing duplicate values, the migration will fail.
  - Added the required column `clientId` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tripId` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `client` MODIFY `email` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `item` ADD COLUMN     `clientId` INT NOT NULL,
    ADD COLUMN     `tripId` INT NOT NULL;

-- AlterTable
ALTER TABLE `trip` MODIFY `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `_ClientToTrip` (
    `A` INT NOT NULL,
    `B` INT NOT NULL,
UNIQUE INDEX `_ClientToTrip_AB_unique`(`A`, `B`),
INDEX `_ClientToTrip_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Client.email_unique` ON `Client`(`email`);

-- AddForeignKey
ALTER TABLE `_ClientToTrip` ADD FOREIGN KEY (`A`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ClientToTrip` ADD FOREIGN KEY (`B`) REFERENCES `Trip`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item` ADD FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item` ADD FOREIGN KEY (`tripId`) REFERENCES `Trip`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

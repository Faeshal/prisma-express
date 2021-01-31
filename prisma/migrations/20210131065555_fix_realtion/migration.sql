/*
  Warnings:

  - You are about to drop the `_clienttotrip` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_clienttotrip` DROP FOREIGN KEY `_clienttotrip_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_clienttotrip` DROP FOREIGN KEY `_clienttotrip_ibfk_2`;

-- DropForeignKey
ALTER TABLE `item` DROP FOREIGN KEY `item_ibfk_1`;

-- DropForeignKey
ALTER TABLE `item` DROP FOREIGN KEY `item_ibfk_2`;

-- CreateTable
CREATE TABLE `Trip_Client` (
    `clientId` INT NOT NULL,
    `tripId` INT NOT NULL,

    PRIMARY KEY (`clientId`,`tripId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- DropTable
DROP TABLE `_clienttotrip`;

-- AddForeignKey
ALTER TABLE `Trip_Client` ADD FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Trip_Client` ADD FOREIGN KEY (`tripId`) REFERENCES `Trip`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item` ADD FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item` ADD FOREIGN KEY (`tripId`) REFERENCES `Trip`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

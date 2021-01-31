/*
  Warnings:

  - You are about to drop the `trip_client` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `trip_client` DROP FOREIGN KEY `trip_client_ibfk_1`;

-- DropForeignKey
ALTER TABLE `trip_client` DROP FOREIGN KEY `trip_client_ibfk_2`;

-- DropForeignKey
ALTER TABLE `item` DROP FOREIGN KEY `item_ibfk_1`;

-- DropForeignKey
ALTER TABLE `item` DROP FOREIGN KEY `item_ibfk_2`;

-- CreateTable
CREATE TABLE `TripClient` (
    `clientId` INT NOT NULL,
    `tripId` INT NOT NULL,

    PRIMARY KEY (`clientId`,`tripId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- DropTable
DROP TABLE `trip_client`;

-- AddForeignKey
ALTER TABLE `TripClient` ADD FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TripClient` ADD FOREIGN KEY (`tripId`) REFERENCES `Trip`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item` ADD FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item` ADD FOREIGN KEY (`tripId`) REFERENCES `Trip`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

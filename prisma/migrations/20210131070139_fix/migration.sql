-- DropForeignKey
ALTER TABLE `item` DROP FOREIGN KEY `item_ibfk_1`;

-- DropForeignKey
ALTER TABLE `item` DROP FOREIGN KEY `item_ibfk_2`;

-- DropForeignKey
ALTER TABLE `trip_client` DROP FOREIGN KEY `trip_client_ibfk_1`;

-- DropForeignKey
ALTER TABLE `trip_client` DROP FOREIGN KEY `trip_client_ibfk_2`;

-- AlterTable
ALTER TABLE `item` MODIFY `tripId` INT;

-- AddForeignKey
ALTER TABLE `Item` ADD FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item` ADD FOREIGN KEY (`tripId`) REFERENCES `Trip`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Trip_Client` ADD FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Trip_Client` ADD FOREIGN KEY (`tripId`) REFERENCES `Trip`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

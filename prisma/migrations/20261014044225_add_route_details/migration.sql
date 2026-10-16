/*
  Warnings:

  - Added the required column `arrival` to the `Route` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departure` to the `Route` table without a default value. This is not possible if the table is not empty.
  - Added the required column `operator` to the `Route` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seats` to the `Route` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vehicle` to the `Route` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `route` ADD COLUMN `arrival` VARCHAR(191) NOT NULL,
    ADD COLUMN `departure` VARCHAR(191) NOT NULL,
    ADD COLUMN `operator` VARCHAR(191) NOT NULL,
    ADD COLUMN `seats` INTEGER NOT NULL,
    ADD COLUMN `status` VARCHAR(191) NOT NULL DEFAULT 'Boarding',
    ADD COLUMN `vehicle` VARCHAR(191) NOT NULL;

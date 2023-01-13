/*
  Warnings:

  - Added the required column `dressId` to the `Avatar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dressList` to the `Avatar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `avatar` ADD COLUMN `dressId` INTEGER NOT NULL,
    ADD COLUMN `dressList` JSON NOT NULL;

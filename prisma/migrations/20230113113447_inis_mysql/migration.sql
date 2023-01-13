-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `nick` VARCHAR(191) NULL,
    `isFirstLogin` BOOLEAN NOT NULL DEFAULT true,
    `token` VARCHAR(191) NULL DEFAULT '',
    `warshipId` INTEGER NOT NULL DEFAULT 0,
    `warshipFirstAvatarId` INTEGER NOT NULL DEFAULT 101,
    `birthDate` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ClientData` (
    `id` VARCHAR(191) NOT NULL,
    `clientDataId` INTEGER NOT NULL,
    `data` VARCHAR(191) NOT NULL,
    `userUid` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Avatar` (
    `avatarId` INTEGER NOT NULL,
    `level` INTEGER NOT NULL DEFAULT 1,
    `star` INTEGER NOT NULL,
    `stigmataUniqueId1` INTEGER NOT NULL DEFAULT 0,
    `stigmataUniqueId2` INTEGER NOT NULL DEFAULT 0,
    `stigmataUniqueId3` INTEGER NOT NULL DEFAULT 0,
    `exp` INTEGER NOT NULL DEFAULT 0,
    `fragment` INTEGER NOT NULL DEFAULT 0,
    `weaponUniqueId` INTEGER NOT NULL,
    `skillList` JSON NOT NULL,
    `userUid` INTEGER NOT NULL,

    PRIMARY KEY (`avatarId`, `userUid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ClientData` ADD CONSTRAINT `ClientData_userUid_fkey` FOREIGN KEY (`userUid`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Avatar` ADD CONSTRAINT `Avatar_userUid_fkey` FOREIGN KEY (`userUid`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

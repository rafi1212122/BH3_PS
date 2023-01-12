-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "nick" TEXT,
    "isFirstLogin" BOOLEAN NOT NULL DEFAULT true,
    "token" TEXT DEFAULT '',
    "warshipId" INTEGER NOT NULL DEFAULT 0,
    "warshipFirstAvatarId" INTEGER NOT NULL DEFAULT 101,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("createdAt", "id", "isFirstLogin", "name", "nick", "token", "updatedAt", "warshipFirstAvatarId") SELECT "createdAt", "id", "isFirstLogin", "name", "nick", "token", "updatedAt", "warshipFirstAvatarId" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

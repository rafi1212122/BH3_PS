-- CreateTable
CREATE TABLE "ClientData" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "clientDataId" INTEGER NOT NULL,
    "data" TEXT NOT NULL,
    "userUid" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ClientData_userUid_fkey" FOREIGN KEY ("userUid") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

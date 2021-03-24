-- CreateTable
CREATE TABLE "User" (
    "Id" TEXT NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "CreatedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.Email_unique" ON "User"("Email");

-- CreateTable
CREATE TABLE "User" (
    "Id" SERIAL NOT NULL,
    "Email" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Birthay" TEXT NOT NULL,
    "CPF" TEXT NOT NULL,
    "Gender" TEXT NOT NULL,
    "Pass" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

/*
  Warnings:

  - The values [DRIVE_IN] on the enum `ConsumptionMethod` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `description` on the `MenuCategory` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ConsumptionMethod_new" AS ENUM ('TAKEAWAY', 'DINE_IN');
ALTER TABLE "Order" ALTER COLUMN "consumptionMethod" TYPE "ConsumptionMethod_new" USING ("consumptionMethod"::text::"ConsumptionMethod_new");
ALTER TYPE "ConsumptionMethod" RENAME TO "ConsumptionMethod_old";
ALTER TYPE "ConsumptionMethod_new" RENAME TO "ConsumptionMethod";
DROP TYPE "ConsumptionMethod_old";
COMMIT;

-- AlterTable
ALTER TABLE "MenuCategory" DROP COLUMN "description";

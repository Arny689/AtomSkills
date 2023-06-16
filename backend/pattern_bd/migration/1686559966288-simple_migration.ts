import { MigrationInterface, QueryRunner } from "typeorm"

export class SimpleMigration1686559966288 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        `ALTER TABLE "users" RENAME COLUMN "email" TO "name"`
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        `ALTER TABLE "users" RENAME COLUMN "name" TO "email"`
    }

}

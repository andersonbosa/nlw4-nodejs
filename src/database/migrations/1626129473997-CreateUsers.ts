import { MigrationInterface, QueryRunner, Table } from "typeorm";

const userTableName = 'users'

export class CreateUsers1626129473997 implements MigrationInterface {

    /**
     * create Table migration
     *
     * @param {QueryRunner} queryRunner
     * @return {*}  {Promise<void>}
     * @memberof CreateUsers1626129473997
     */
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: userTableName,
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'created_at',
                        type: 'date',
                        isNullable: false,
                        default: 'now()'
                    },
                ]
            })
        )
    }

    /**
     * remove table
     *
     * @param {QueryRunner} queryRunner
     * @return {*}  {Promise<void>}
     * @memberof CreateUsers1626129473997
     */
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(userTableName)
    }

}

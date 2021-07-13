import { MigrationInterface, QueryRunner, Table } from "typeorm";

/**
 * @typedef ForeignKey
 * @property {string} name 
 * @property {string} referencedTableName 
 * @property {string[]} referencedColumnNames 
 * @property {string[]} columnNames 
 * @property {string} onDelete 
 * @property {string} onUpdate 
 */

const SurveysUsersTableName = 'surveys_users'

export class CreateSurveysUsers1626182268203 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: SurveysUsersTableName,
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: 'user_id',
                        type: 'uuid',
                        isNullable: false
                    },
                    {
                        name: 'survey_id',
                        type: 'uuid',
                        isNullable: false
                    },
                    {
                        name: 'value',
                        type: 'number',
                        isNullable: true
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                        isNullable: false,
                    }
                ],

                /** @type {ForeignKey[]} **/
                foreignKeys: [
                    {
                        name: 'FKUser',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['user_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'

                    },
                    {
                        name: 'FKSurvey',
                        referencedTableName: 'surveys',
                        referencedColumnNames: ['id'],
                        columnNames: ['survey_id'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'

                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(SurveysUsersTableName)
    }

}

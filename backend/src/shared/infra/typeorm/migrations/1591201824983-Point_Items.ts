import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class PointItems1591201824983 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'item_points',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'item_id',
            type: 'uuid',
          },
          {
            name: 'point_id',
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'Item',
            referencedTableName: 'items',
            referencedColumnNames: ['id'],
            columnNames: ['item_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'Point',
            referencedTableName: 'points',
            referencedColumnNames: ['id'],
            columnNames: ['point_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('item_points');
  }
}

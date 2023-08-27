import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('posts', (table) => {
    table.specificType('id', 'CHAR(36)').primary();
    table.string('slug').notNullable().unique();
    table.string('title').notNullable();
    table.text('content');
    table.timestamp('publishedAt').index();
    table.timestamp('createdAt').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updatedAt').defaultTo(knex.fn.now()).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('posts');
}

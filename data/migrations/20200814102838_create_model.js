exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (table) => {
      table.increments("id");
      table.string("name").notNullable();
      table.string("description");
      table.boolean("completed").notNullable().defaultTo(false);
    })
    .createTable("tasks", (table) => {
      table.increments("id");
      table.string("description").notNullable();
      table.text("notes");
      table.boolean("completed").notNullable().defaultTo(false);
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("resources", (table) => {
      table.increments("id");
      table.string("name").notNullable().unique();
      table.string("description");
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};

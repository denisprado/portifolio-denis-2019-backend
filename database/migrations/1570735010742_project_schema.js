"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProjectSchema extends Schema {
  up() {
    this.create("projects", table => {
      table.increments();
      table.timestamps();
      table.string("title").notNullable();
      table.text("description", "longtext");
      table
        .integer("file_id")
        .unsigned()
        .references("id")
        .inTable("files")
        .onUpdate("CASCADE")
        .onDelete("SET NULL");
    });
  }

  down() {
    this.drop("projects");
  }
}

module.exports = ProjectSchema;

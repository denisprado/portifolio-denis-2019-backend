"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RemoveCategoryIdFromProjectSchema extends Schema {
  up() {
    this.table("projects", table => {
      table.dropColumn("category_id");
    });
  }

  down() {
    this.table("projects", table => {
      // reverse alternations
    });
  }
}

module.exports = RemoveCategoryIdFromProjectSchema;

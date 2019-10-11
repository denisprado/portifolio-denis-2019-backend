"use strict";

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const User = use("App/Models/User");
const Project = use("App/Models/Project");

class DatabaseSeeder {
  async run() {
    const user = await User.create({
      name: "Denis Forigo",
      email: "denisforigo@gmail.com",
      password: "123456"
    });
    const project = await Project.create({
      title: "Projeto 1",
      description: "Teste"
    });
  }
}

module.exports = DatabaseSeeder;

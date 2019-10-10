"use strict";

const User = use("App/Models/User");

class UserController {
  async store({ request, response, auth }) {
    const data = request.only(["name", "email", "password"]);

    await User.create(data);

    const token = await auth.attempt(data.email, data.password);

    return token;
  }

  async index({ auth }) {
    const users = User.all();

    return users;
  }
}

module.exports = UserController;

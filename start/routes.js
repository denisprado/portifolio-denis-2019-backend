"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.post("/sessions", "SessionController.store").validator("Session");
Route.post("/users", "UserController.store").validator("User");
Route.get("/users", "UserController.index");
Route.resource("projects", "ProjectController").apiOnly();
Route.resource("categories", "CategoryController").apiOnly();

Route.get("/files/:id", "FileController.show");
Route.group(() => {
  Route.post("/projects/:id/files", "FileController.store");
}).middleware(["auth"]);

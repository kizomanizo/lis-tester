const Express = require("express");
const Router = Express.Router();
const Controller = require("../controllers/orders");
const checkLogin = require("../helpers/basicAuth");

Router.route("/").get(checkLogin, Controller.list);
Router.route("/").post(checkLogin, Controller.save);
Router.route("/:id").get(checkLogin, Controller.search);

module.exports = Router;

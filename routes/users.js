"use strict";
const user = require("../controllers/users");
const Multer = require("multer");
const multer_config = require("../config/multer");
const validate = require("../libs/validate");

module.exports = (app) => {
    app.route("/register").post(user.Register);
    app.route("/login").post(user.Login);
    app.route("/description").put(user.Description);
    app.route("/logo").put(Multer({ storage: multer_config.diskStorage(), fileFilter: validate.imageFilter }).single("image"), user.Logo);
    app.route("/avatar").put(Multer({ storage: multer_config.diskStorage(), fileFilter: validate.imageFilter }).single("image"), user.Avatar);
}

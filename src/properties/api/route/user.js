import express from "express";
const router = express.Router();
const userController = require("../controller/userController");
import auth from "../config/auth"

router.post("/register", userController.registerNewUser);
router.post("/login", userController.loginUser);
router.get("/me", auth, userController.getUserDetails);

module.exports = router;

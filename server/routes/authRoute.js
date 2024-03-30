const express = require("express");
const {
  register,
  login,
  forgotPassword,
  allUser,
  reset,
  resetPassword,
} = require("../controllers/authController.js");
const router = express.Router();

router.get("/all", allUser);
router.post("/register", register);
router.post("/login", login);
router.post("/sendPasswordLink", forgotPassword);
router.get("/forgot-password/:id/:token", reset);
router.post("/:id/:token", resetPassword);
module.exports = router;

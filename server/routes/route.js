const express = require("express");
const router = express.Router();
const UserModel = require("../models/DatabaseSchema");
const { login } = require("../controllers/LoginControl");
const { register } = require("../controllers/RegisterControl");
const { getUser } = require("../controllers/UserControl");
router.post("/visitor/register", async (req, res) => {
  register(req, res);
});

router.post("/visitor/login", async (req, res) => {
  login(req, res);
});

router.get("/user/:userEmail", async (req, res) => {
  getUser(req, res);
});

module.exports = router;

const express = require("express");
const { postControllers } = require("../controllers");
const router = express.Router();

router.get("/", postControllers.getAllPosts);

module.exports = router;

const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res) {
  // res.clearCookie("username");
  // res.send("Cookie has been cleared");
  res.status(200).send("Logout successful");
});

module.exports = router;

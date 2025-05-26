const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res) {
  // console.log("api実行");
  // res.cookie("username", "John Doe", { maxAge: 900000, httpOnly: true });
  res.json([
    {
      id: 1,
      name: "test1",
    },
    {
      id: 2,
      name: "test2",
    },
  ]);
});

module.exports = router;

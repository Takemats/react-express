const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const logoutRouter = require("./routes/logout");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Serve static files from the React app
// app.use(express.static(path.join(__dirname, "build")));

// 静的ファイルの提供 (Reactのbuild後に必要)
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client/build", "index.html"));
// });

// API
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/logout", logoutRouter);

// const port = process.env.PORT || 3001;
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;

const express = require("express");
require("express-async-errors");
const cors = require("cors");
const middleware = require("./utils/middleware");
const authRoutes = require("./routes/auth");
const entryRoutes = require("./routes/entry");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static("build"));

app.use("/api", authRoutes);
app.use("/api/entries", entryRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

app.use(middleware.unknownEndpointHandler);
app.use(middleware.errorHandler);

module.exports = app;

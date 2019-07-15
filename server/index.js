// Imports principais
const express = require("express");
const requireDir = require("require-dir");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./src/configs/keys");
const { mongoURI } = keys;
requireDir("./src/models");
const router = require("./src/router");

// MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true });

const app = express();

// inicializações
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Definindo roteador
app.use("/api", router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

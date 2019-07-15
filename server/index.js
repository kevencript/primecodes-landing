const express = require("express");
const bodyParser = require("body-parser");
const router = require("./src/router");
const app = express();

// Definindo rotas
// require("./src/routes/databaseRoutes")(app);
// require("./src/routes/orcamentoRoutes")(app);

// inicializações
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", router);

app.listen("3001", () => {
  console.log("Server started on port 3001");
});

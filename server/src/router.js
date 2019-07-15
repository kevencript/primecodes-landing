const express = require("express");
const router = express.Router();

// Importando Módulos e Rotas
const contatoRoutes = require("./routes/contatoRoutes");

// @desc   Contém as rotas de Contato simples
router.use("/contato", contatoRoutes);

module.exports = router;

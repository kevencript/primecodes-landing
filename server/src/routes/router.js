const express = require("express");
const router = express.Router();

// Importando Módulos
const contatoRoutes = require("./contatoRoutes");

// @desc   Contém as rotas de Contato simples
router.use("/contato", contatoRoutes);

module.exports = router;

const express = require("express");
const router = express.Router();

// Importando os Controllers
const contato_controller = require("../ controllers/contatoController");

// ROTAS \\

// @route    POST /api/contato/inserir
// @desc     Inserir um novo contato no Banco de Dados
// @acess    Public
router.post("/inserir", contato_controller.inserir_contato);

// @route    GET /api/contato/listar
// @desc     Retornar todas as mensagens de contato
// @acess    Private
router.get("/listar", contato_controller.listar_todos_contatos);

// @route    GET /api/contato/listar/:id
// @desc     Retornar uma mensagem de contato por meio do id
// @acess    Private
router.get("/listar/:id", contato_controller.listar_por_id);

module.exports = router;

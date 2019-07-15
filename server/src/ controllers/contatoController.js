const mongoose = require("mongoose");
const contatoMessage = mongoose.model("contato");

// Inserir os dados de contato no banco de dados
exports.inserir_contato = async (req, res) => {
  const { nome, email, telefone, mensagem } = req.body;
  const mensagemPronta = {};

  // verificação de campos e inserção no objeto "mensagemPronta"
  if (nome) mensagemPronta.nome = nome;
  if (email) mensagemPronta.email = email;
  if (telefone) mensagemPronta.telefone = telefone;
  if (mensagem) mensagemPronta.mensagem = mensagem;

  try {
    // inserindo nova mensagem no banco
    mensagem = new contatoMessage(mensagemPronta);
    await mensagem.save();
    res.status(200).send(mensagem);

    // lidando com erros
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Server Error");
  }
};

// Listar todas as mensagens de contato
exports.listar_todos_contatos = (req, res) => {
  res.send("- CÓDIGO NÃO IMPLEMENTADO");
};

// Listar uma mensagem de contato através do ID
exports.listar_por_id = (req, res) => {
  res.send("- CÓDIGO NÃO IMPLEMENTADO");
};

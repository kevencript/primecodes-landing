const mongoose = require("mongoose");
const contatoMessage = mongoose.model("contatoMessage");

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
    const mensagem = new contatoMessage(mensagemPronta);
    await mensagem.save();
    res.send(mensagem);
    console.log("Mensagem enviada com sucesso");

    // lidando com erros
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Server Error");
  }
};

// Listar todas as mensagens de contato
exports.listar_todos_contatos = async (req, res) => {
  try {
    // buscando todas as mensagens no db
    const messages = await contatoMessage.find();
    res.json(messages);
  } catch (error) {
    console.log(error.message);
    res.status(500).json("Server Error");
  }
};

// Listar uma mensagem de contato através do ID
exports.listar_por_id = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await contatoMessage.findOne({
      _id: id
    });

    res.json(message);
  } catch (error) {
    console.log(error.message);
    res.status(404).json("Server Error");
  }
};

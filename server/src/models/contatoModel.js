const mongoose = require("mongoose");

const mensagem = new mongoose.Schema({
  nome: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    required: true
  },
  mensagem: {
    type: String,
    required: true
  },
  data: {
    type: Date,
    default: Date.now
  }
});

mongoose.model("contatoMessage", mensagem);

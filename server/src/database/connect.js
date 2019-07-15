const mysql = require("mysql");
const keys = require("../configs/keys");

var connection;

function handleDisconnect() {
  // criando conexão com o MySql
  connection = mysql.createConnection(keys);

  // conectando com o Database
  connection.connect(err => {
    if (err) {
      // tratando erros de conexão
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 2000);
    } else {
      // mensagem caso não haja nenhum erro
      console.log("Database connected...");
    }
  });

  // tratando erro de "Conexão Perdida"
  connection.on("error", err => {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      // reiniciando a conexão
      handleDisconnect();
    } else {
      // caso não seja o erro "Conexão Perdida", retornamos o erro em questão
      throw err;
    }
  });
}

// iniciando a função de conexão com Database
handleDisconnect();

module.exports = connection;

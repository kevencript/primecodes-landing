const express = require('express');
const mysql = require('mysql');

// create connection 
const db= mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'orcamento'
});

//connect 
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('mysql connected ...');
});

const app = express();

// create db 
app.get('/createdb', (req,res) =>{
    let sql = 'CREATE DATABASE orcamento';
    db.query(sql, (err, result) =>{
        if(err) throw err;
        console.log(result);
        res.send('database created ...');
    });
});

//create table
app.get('/criartabela', (req,res) =>{
    let sql = 'CREATE TABLE registros(id int AUTO_INCREMENT, nome VARCHAR(255), email VARCHAR(255), mensagem VARCHAR(500), telefone VARCHAR(30), PRIMARY KEY (id))';
    db.query(sql, (err, result) =>{
        if(err) throw err;
        console.log(result);
        res.send('registros table created ...');
    });
});

//insert data on table
app.get('/adicionar',(req,res) =>{
    let post = {nome:'TESTE',email:'teste@email.com',mensagem:'teste teste teste teste teste teste',telefone:'61 992593610'}
    let sql = 'INSERT INTO registros SET ?';
    let query = db.query(sql, post, (err, result) =>{
        if(err) throw err;
        console.log(result);
        res.send('postagem realiazada ...');
    });
});
//select postagem
app.get('/listar',(req,res) =>{
    let sql = 'SELECT * FROM registros';
    let query = db.query(sql, (err,results) =>{
        if(err) throw err;
        console.log(results);
        res.send('tabela listada ...');
    });
});
//select uma postagem
app.get('/listar/:id',(req,res) =>{
    let sql = `SELECT * FROM registros WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err,result) =>{
        if(err) throw err;
        console.log(result);
        res.send('postagem listada ...');
    });
});



app.listen('3001', () =>{
    console.log('Server started on port 3001');
});
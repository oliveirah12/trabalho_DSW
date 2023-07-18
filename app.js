const connection = require('./conexao.js');

// Exemplo de consulta ao banco de dados
connection.query('SELECT * FROM tabela', (err, rows) => {
  if (err) throw err;

  console.log('Resultado da consulta:', rows);
});

// Exemplo de inserção de dados no banco de dados
const novoRegistro = { campo1: 'valor1', campo2: 'valor2' };
connection.query('INSERT INTO tabela SET ?', novoRegistro, (err, result) => {
  if (err) throw err;

  console.log('Novo registro inserido. ID:', result.insertId);
});

// Feche a conexão quando terminar de usar
connection.end();

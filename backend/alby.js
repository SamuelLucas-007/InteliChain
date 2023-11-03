// Importando o módulo Express
const express = require('express');

// Criando uma nova aplicação Express
const app = express();

// Definindo uma rota GET para a raiz ("/")
app.get('/', (req, res) => {
    // Lendo a variável de ambiente
    const wallet = process.env.WALLET_HASH;

    // Enviando a variável de ambiente como resposta
    res.send(`O valor da variável de ambiente é: ${wallet}`);
});

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

/**
 * arquivo: routes/index.js
 * descrição: arquivo responsável por fazer a conexao com o arquivo 'server.js'
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    mssage: 'Seja bem vindo a API Node.js + PostgraSQL + Azure',
    version: '1.0.0'
  })
})

module.exports = router
/**
 * arquivo: server.js
 * descrição: arquivo responsável por toda a configuração e execução do Back-End ('Employee')
 */

require('dotenv')

const app = require('./src/app.js');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('a aplicação esta funcionando na porta: ' + port)
})

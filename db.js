//após verificação, estava faltando o item de configurações das databases.
//aparentemente é o mesmo arquivo, mas tive receio de deixar apenas o da pasta.

//definindo a constante de configuração
const config = require('./config');

//constante do sequelize
const sequelize = require('sequelize');

const sequelize = new sequelize('api-ioasys', 'postgres', '123456seteoito', {

  host: localhost,
  port: 3333,
  dialect: 'postgres'
});

module.exports(sequelize);
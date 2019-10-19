//configurações do db.js, para inicialização do banco de dados

const config = require('./config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('api-ioasys', 'postgres', '123456seteoito', {
    host: 'localhost',
    port: 3333,
    dialect: 'postgres'
});

module.exports = sequelize;
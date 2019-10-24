//resolvendo o pull request solicitado pelo Igor Martins, que faltava a um jeito
//de inicializar a API. 

//constante do express
const express = require('express');

//constante do body-parser
const bParser = require('body-parser');

//constante do http
const http = require('http');

//constante do app 
const app = express();

//constante de configurações, puxando o arquivo de config
const config = require('./config');

//constante do routes (rotas)
const routes = require('./routes');

//Inicializando a aplicação

//uso do body-parser json
app.use(bParser.json());

//definindo a propriedade extended como true
app.use(bParser.urlencoded({extended: true}));

//uso do static
app.use(express.static('client'));

//definindo as rotas para inicialização do app
routes.set(app);

//porta de escuta da aplicação
app.listen(config.port, () => {console.log('O servidor foi iniciado em ${config.port}')});
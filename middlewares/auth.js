//eu nunca tinha mexido com middlewares. 
//É algo que tenho uma certa dificuldade por estar aprendendo ainda sobre backend e suas possibilidades no mundo das API's.

const jwt = require('jsonwebtoken');
const config = require('../config');

const checkAuth = (req, res, next) => {
    const token = req.headers['token'];
    if(!token){
        return res.status(403).send({ auth: false, message: 'Ops! Nenhum token foi informado.' });
    }

    jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if(err){
            return res.status(500).send({ auth: false, message: 'Ops! Falha ao autenticar com este token.' });
        }

        req.user = {
            email: decoded.email,
            id: decoded.id
        };

        next();
    });
}

module.exports = {
    checkAuth
}
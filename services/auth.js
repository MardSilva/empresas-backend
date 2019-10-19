const sequelize = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = sequelize.import('../models/user');
const config = require('../config');

const authenticate = async params => {
    return await User.findOne({
        where: {
            email: params.email
        },
        raw: true
    }).then(user => {
        if(!user){
            throw new Error('Ops! Erro de autenticação. Usuário não encontrado!');
        }

        if(!bcrypt.compareSync(params.password || '', user.password)){
            throw new Error('Ops! Erro de autenticação. Senha inválida!');
        }

        const payload = {
            email: user.email,
            id: user.id,
            time: new Date()
        };

        var token = jwt.sign(payload, config.jwtSecret, {
            expiresIn: config.tokenExpireTime
        });

        return token;
    })
}

module.exports = {
    authenticate
}
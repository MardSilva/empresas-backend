const config = require('../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const authService = require('../services/auth');
const userService = require('../services/user');

login = (req, res) => {
    return authService.authenticate(req.body)
    .then(token => {
        res.send({
            success: true,
            data: { token }
        });
    })
    .catch(err => {
        res.send({
            success: false,
            message: err.message
        });
    })
};

register = (req, res) => {
    var email = req.body.email;

    return userService.getUserByemail(email || '')
    .then(exists => {
        if(exists){
            return res.send({
                success: false,
                message: 'Falha ao registrar. Este usuário já foi registrado anteriormente.'
            });
        }

        const user = {
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, config.saltRounds)
        }

        return userService.addUser(user)
        .then(() => res.send({ success: true }));
    });
};

module.exports = {
    login,
    register
}
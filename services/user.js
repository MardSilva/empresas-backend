//arquivo user.js
const sequelize = require('../db');
const User = sequelize.import('../models/user');

const addUser = async user => await User.create(user);

const getUserByemail = async email => User.findOne({ where: {email}});

module.exports = {
    addUser,
    getUserByemail
}
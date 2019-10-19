//arquivo enterprise.js

const sequelize = require('../db');
const Enterprise = sequelize.import('../models/enterprise');

const getAll = async () => await Enterprise.findAll();
const getById = async (id) => await Enterprise.findAll({
    where: {
        id: id
    }
});
const getByNameAndType = async(name, type) => await Enterprise.findAll({
    where: {
        name: name,
        enterprise_type: type
    }
});
const add = async (enterprise) => Enterprise.create(enterprise);

module.exports = {
    getAll,
    getById,
    getByNameAndType,
    add
}
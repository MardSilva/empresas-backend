//arquivo enterprise do controller 
const enterpriseService = require('../services/enterprise');

getEnterprises = async (req, res) => {
    enterpriseService.getAll()
    .then(data => res.send(data));
};

getEnterprise = async (req, res) => {
    enterpriseService.getById(req.params.id)
    .then(data => res.send(data));
};

getEnterpriseByNameAndType = async (req, res) => {
    enterpriseService.getByNameAndType(req.params.name, req.params.enterprise_type)
    .then(data => res.send(data));
};

addEnterprise = async (req, res) => {
    await enterpriseService.add({
        name: req.body.name,
        enterprise_type: req.body.enterprise_type
    }).then(data => res.send(data));
};

module.exports = {
    getEnterprise,
    getEnterprises,
    getEnterpriseByNameAndType,
    addEnterprise
}
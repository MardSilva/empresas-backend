
//Arquivo das rotas. Eu iniciailmente, pensei em deixar as rotas numa pasta chamada 'routes', mas, vi que iria ser mais
//fácil entregar ele desta forma. Caso seja necessário, eu posso alterar posteriormente, para o ./routes e fazer todos
//os ajustes necessários.

const authController = require('./controllers/auth');
const enterpriseController = require('./controllers/enterprise');
const authMiddleware = require('./middlewares/auth');

module.exports.set = app => {

    //endpoints de registro/autenticação do usuário
    app.post('/api/v1/users/auth/sign_in', authController.login);
    app.post('/api/v1/users/auth/sign_up', authController.register);

    //após o usuário ser logado com sucesso
    app.get('/api/v1/enterprise', authMiddleware.checkAuth, enterpriseController.getEnterprises);
    app.get('/api/v1/enterprise/:id', authMiddleware.checkAuth, enterpriseController.getEnterprise);
    app.get('/api/v1/enterprise/:name/:enterprise_type', authMiddleware.checkAuth, enterpriseController.getEnterpriseByNameAndType);
    app.post('/api/v1/enterprise', authMiddleware.checkAuth, enterpriseController.addEnterprise);
}
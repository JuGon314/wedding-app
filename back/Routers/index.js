const routerProdutos = require('./produtosRoute');

module.exports = (app)  => {
    app.use(routerProdutos);
}
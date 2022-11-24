const { Router } = require('express');
const productController = require('../../controllers/products/index.js');
const routerProducts = new Router();

routerProducts.get('/', (req, res) => { res.send('router productos'); });
routerProducts.post('/', productController.save);
routerProducts.put('/', (req, res) => { res.send('router productos'); });
routerProducts.delete('/', (req, res) => { res.send('router productos'); });

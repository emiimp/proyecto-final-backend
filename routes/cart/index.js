const { Router } = require('express');
cartController = require('../../controllers/cart/index.js')
const routeCart = new Router();

routeCart.get('/', (req,res) => {res.send(`router carrito`)})
routeCart.post('/', cartController.addToCart);
routeCart.post('/', (req,res) => {res.send(`router carrito`)})
routeCart.delete('/', (req,res) => {res.send(`router carrito`)})
routeCart.delete('/', (req,res) => {res.send(`router carrito`)})

module.exports = routeCart
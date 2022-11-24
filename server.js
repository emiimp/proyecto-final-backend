const express = require('express');
const app = express ();
const routerCart = require ("./routes/cart/index.js");
const routerProducts = require ("./routes/products/index.js")

app.use(express.json());
app.use(express.urlencoded({extended : true }));

app.use('/cart', routerCart);
app.use('/products', routerProducts);

const server = app.listen (process.env.PORT || 8080, () =>{
    console.log(`Servidor corriendo en el puerto ${server.address().port}`)
})

app.get('/api', (req,res) => res.send(`Bienvenidos a la api`))
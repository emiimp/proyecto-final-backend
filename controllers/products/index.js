const fs = require('fs');

class Products {
  constructor() {this.db = './products.txt';}

  async save(req, res) {
    console.log('req.body: ', req.body);
    try {
        if (fs.existsSync("./products.txt")) {
            const data = await fs.promises.readFile("./products.txt", 'utf-8', async (err, cont));
            const array = JSON.parse(cont);
            const lastProductId = array[array.length - 1].id;
            newProduct.id = lastProductId + 1;
            array.push(newProduct);
            const writeFile = await fs.writeFile("./products.txt", JSON.stringify(array));
            res.status(201).send('El producto se guardó correctamente');
        } else {
            const data = [];
            const newProduct = req.body;
            newProduct.id = 1;
            data.push(newProduct);
            const writeFile = await fs.writeFile("./products.txt", JSON.stringify(data));
            res.status(201).send('El producto se guardó correctamente');
        }
    } catch(err) {
        res.send(err);
}}}

const productController = new Products();
module.exports = productController
const { ModuleResolutionKind } = require("typescript");

class Cart {
  constructor() {
    this.db = './cart.txt';}

    async addToCart(req,res){
        try {
            if (fs.existsSync("./cart.txt")) {
                const data = await fs.promises.readFile("./cart.txt", 'utf-8', async (err, cont) => {
                  const products = JSON.parse(fs.readFileSync("./products.txt", 'utf-8'))
                  const cart = JSON.parse(fs.readFileSync("./cart.txt", 'utf-8'))
                
                const selectedProducts = products.filter(x => x.id === req.body.id);
                const prodIndex = products.findIndex(x => x.id === req.body.id);

                delete selectedProducts.stock;

                selectedProducts.quantity = req.body.quantity;

                products[prodIndex].stock -= req.body.quantity;

                cart.push(selectedProducts);

                const writeProds = await fs.writeFileSync("./products.txt", JSON.stringify(products));

                const writeCart = await fs.writeFileSync("./cart.txt", JSON.stringify(array));

              })
            } else {
                const data = [];
                const newProduct = req.body;
                newProduct.id = 1;
                data.push(newProduct);
                const writeFile = await fs.writeFile("./cart.txt", JSON.stringify(data));
                res.status(201).send('El producto se guardó correctamente');
            }
        } catch(err) {
            res.send(err);
    }}}


const cartController = new Cart();

modules.export = cartController
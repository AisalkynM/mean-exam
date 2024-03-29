
const products = require('../controllers/products');

module.exports = (app) => {
    app.get('/api/products', (req,res) => products.index(req,res))
    app.get('/api/products/:id', (req,res) => products.show(req,res) )
    app.post('/api/products/create', (req,res) => products.create(req,res))
    app.put('/api/products/update/:id', (req,res) => products.update(req,res))
    app.delete('/api/products/delete/:id', (req,res) => products.destroy(req,res))
}
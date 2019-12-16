
require('../models/product')
const mongoose = require('mongoose'),
    Product = mongoose.model("Product")
    
module.exports = {
    index: (req, res) => {
        /*
Author.find().sort({name:1})// ALPHABETIC->WORKS
Author.find().collation({locale:'en',strength: 3}).sort({name: 1})// ALPHABETIC( U/L case)->WORKS

Author.find().sort({createdAt:-1})// DATE_SORTING->WORKS/first created at the button, newCreated at the top
Author.find().sort({createdAt:1})//DATE_SORTING->WORKS-first created at the top, newCreated at the button
        */

        Product.find()
        .then(result => res.json({ results: result}))
        .catch(err => res.json({errors: err.errors}));
    },
    show: (req, res) => {
        Product.findOne({_id: req.params.id})
        .then(result => res.json({results: result}))
        .catch(err => res.json({ errors: err.errors  }));
    },
    create: (req, res) =>{
        Product.create(req.body)
            .then(result => res.json({ results: result }))
            .catch( err => res.json({errors: err.errors}));
    },
    update: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id},req.body,{runValidators: true,context:'query',useFindAndModify: false})
            .then(result => res.json({ results : result }))
            .catch(err => res.json({ errors: err.errors }));
    },
    destroy: (req,res) => {
        Product.deleteOne({_id:req.params.id})
            .then(result => res.json({ results: result }))
            .catch(err => res.json({ errors: err.errors }));
    }
}
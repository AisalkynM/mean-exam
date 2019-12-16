const mongoose=require('mongoose')
// uniqueValidator
var uniqueValidator = require('mongoose-unique-validator');

const ProductSchema  =new mongoose.Schema({
    // _id:{
    //     type:Number,
    // },
    name:{
        type:String,
        required:[true,"Name  is required"],
        minlength:[3," Name should be at least 3 characters"],
        //uniqueValidator
        unique: true,
    },
    qty: {
        type: Number,
        required:[true,"Quality  is required"],
        min:[0,"Qty should be more than or equal to 0" ],
        default:0
    },
    price: {
        type: Number,
        required:[true,"Price  is required"],
        default:0,
        min:[0,"Price should be more than or equal to 0" ]
    }
},{timestamps:true})


ProductSchema.plugin(uniqueValidator);
mongoose.model('Product',ProductSchema);

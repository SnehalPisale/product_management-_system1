import mongoose from "mongoose";
const productSchema = 
mongoose.Schema({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    quantity:{type:Number,required:true,max:10,min:1},
});
const Product = mongoose.model("product",productSchema);
export default Product;
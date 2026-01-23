import Product from "../Models/productModel.js";
export const createProduct = async (req,res)=>{
try
{
    const productData = new Product(req.body);
    if(!productData){
    res.status(404).json({msg:"Data Not Found"});
}
await productData.save();
res.status(200).json({msg:"Product created Successfully!!"});
}
catch(error)
        {
            res.status(500).json({error:error.message});
        }
};

export const getAll = async(req,res)=>{
    try{
        const productData = await Product.find();
        if(!productData){
            res.status(404).json({message:"No Products found"});
        }
        res.status(200).json(productData);
    }
    catch(error){
        res.status(500).json({error:error});

    }
};
export const updateProduct = async(req,res)=>{
try{
    const id = req.params.id;
    const product = await Product.findById(id);
    if(!product){
        return res.status(404).json({message:"Product not found"});
    }
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body,{new:true});
    res.status(200).json(updatedProduct);
}
catch(error){
    res.status(500).json({error:error});
}
};
export const deleteProduct = async(req,res)=>{
try{
    const id = req.params.id;
    const product = await Product.findById(id);
    if(!product){
        return res.status(404).json({message:"Product not found"});
    }
    const delete1 = await Product.findByIdAndDelete(id, req.body,{new:true});
    res.status(200).json(delete1);
}
catch(error){
    res.status(500).json({error:error});
}
};

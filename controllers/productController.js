// -import product collection
const products= require('../models/productSchema')

// -import product collection

//get all products
   exports.getAllProducts = async(req,res)=>{
    try{
        //get all products from products collection mongodb
        const allProducts= await products.find()
        res.status(200).json(allProducts)
    }
    catch(error){
        res.status(401).json(error)
    }
   }
   //get particular products from an id
   exports.viewProduct =async(req,res)=>{
    const id=req.params.id
    try{
        const product =await products.findOne({id})
        if(product){
            res.status(200).json(product)
        }else{
            res.status(404).json("product not found")
        }
    }
    catch(error){
        res.status(401).json(error)
    }

   }
   
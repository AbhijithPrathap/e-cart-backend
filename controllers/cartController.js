//import cart collection
const carts=require('../models/cartSchema')
//add to cart
exports.addToCart = async(req,res)=>{
    //get product details from the request
    const{id,title,price,image,quantity,grandTotal} =req.body

    //logic
    try{
        //checck the product already in cart collection
        const product=await carts.findOne({id})
        if(product){
            //product is in the cart collection ,so increment product quantity
            product.quantity +=1
            //update the product grand total
            product.grandTotal = product.price* product.quantity
            //update product and grand total in mongodb collection
            product.save()
            //send response back to client
            res.status(200).json("Product Added Successfully")
        }
        else{
            //add new product to cart
            const newProduct =new carts({id,title,price,image,quantity,grandTotal:price})
            //save new product in cart
            await newProduct.save()
            //send response to client
            res.status(200).json("Product Added Successfully")
        }

    }
    catch(error){
        res.status(401).json(error)
    }

}
//get cart
exports.getCart=async(req,res)=>{
    //get all products from the cart
    try{
        //logic
        const allcarts=await carts.find()
        res.status(200).json(allcarts)
    }
    catch(error){
        res.status(404).json(error)
    }
}

//cart deletion 
exports.removeCartItem=async(req,res)=>{

    //get id from the request
    const {id}=req.params
    try{
        //logic
        const removeCart =await carts.deleteOne({id})
        if(removeCart.deleteCount!=0){
            //remainig product from the cartbdisplayed to frontend
            const allcarts=await carts.find()
            res.status(200).json(allcarts)

        }
        else{
            res.status(404).json("item not found")
        }


    }catch(error){
        res.status(404).json(error)
    }
}
//cart increment
exports.incrementCart=async(req,res)=>{

    //get product id from request
    const {id}=req.params
    try{
        //logic
        //check the product in the cart collection if it exists increment the quantity
        const product=await carts.findOne({id})

        if(product){
            //update quantity and incremment price
            product.quantity+=1
            product.grandTotal=product.price*product.quantity
            //save changes in mongo db

            await product.save()
            //increment th quantity, get all cart collection item and updating in particular item count
            const allcarts=await carts.find()
            res.status(200).json(allcarts)

        }
        else{
            res.status(404).json("item not found")
        }

    }
    catch(error){
        res.status(404).json(error)
    }
}
//decrement cart item
exports.decrementCart=async(req,res)=>{

    //get product id from request
    const {id}=req.params
    try{
        //logic
        //check the product in the cart collection if it exists increment the quantity
        const product=await carts.findOne({id})
          if(product.quantity==0){
            const removeCart =await carts.deleteOne({id})
        
            //remainig product from the cartbdisplayed to frontend
            const allcarts=await carts.find()
            res.status(200).json(allcarts)

          }
          else{
        if(product){
            //update quantity and update price
            product.quantity-=1
            product.grandTotal=product.price*product.quantity
            //save changes in mongo db

            await product.save()
            //increment th quantity, get all cart collection item and updating in particular item count
            const allcarts=await carts.find()
            res.status(200).json(allcarts)

        }
        else{
            res.status(404).json("item not found")
        }}

    }
    catch(error){
        res.status(404).json(error)
    }
}
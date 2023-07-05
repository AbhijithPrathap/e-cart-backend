// //import wishlists
// const wishlists = require('../models/wishlistSchema')

// //logic for wishlists
// exports.addtowishlist=async(req,res)=>{

//     //get product details from request
//     // req.body={
//     //     id:'3',
//     //     title:'hd',
//     //     price:4444
//     // }

//     //destructure req.body
//       const {id,title,price,image} = req.body

//       //logic
//       try{
//           const item= await wishlists.findOne({id})
//           if(item){
//             res.status(404).json("Product already exists")
//            }
//           else{
//             //add item to wishlists collection
//             const newItem=new wishlists({id,title,price,image})
//             //to store in wishlist collection 
//             await newItem.save()
//             //response send back to the client
//             res.status(200).json("Product added to the wishlist")
//           }
//       }
//       catch(error){
//         res.status(404).json(error)
//       }
// }

//  //logic for view wishlist product details

//  exports.getWishlist =async(req,res)=>{

// try{
  
//  const allWishlists= await wishlists.find()
//  res.status(200).json(allWishlists)
// }
// catch(error){
//   res.status(404).json(error)
// }
// }

// //delete wislist product

// exports.deleteWishlist=async(req,res)=>{
//   const {id}=req.params
//   try{

//     const removeWishlist =await wishlists.deleteOne({id})
//     //get all wishlist product after removing particular product
//     if(removeWishlist){
//       const allitems= await wishlists.find()
//       res.status(200).json(allitems)
//     }
   
//   }
//   catch(error){
//     res.status(404).json(error)
//   }
// }

//import wishlist
const wishlists = require('../models/wishlistSchema')

//logic for  add to wishlist
 exports.addtowishlist= async(req,res)=>{
    //get product details from requset
    // req.body={
    //     id:'3',
    //     title:'hd',
    //     price:555
    // }
    //destructure req.body

  const {id,title,price,image} = req.body

  //logic
  try{
      const item= await wishlists.findOne({id})
      if(item){
        res.status(404).json("Product already exists")
      }
      else{
        //add item to wishlist collection
        const newItem = new wishlists({id,title,price,image})
        //to store in wishlist collection
        await newItem.save()
        res.status(200).json("Product added to the wishlist")
      }
  }
  catch(error){
    res.status(404).json(error)
  }
 }

 //logic to view wishlist product
 exports.getWishlist = async(req,res)=>{
  //logic for view wishlist product details
  try{
   const allWishlist = await wishlists.find()
   res.status(200).json(allWishlist)
  }
  catch{
    res.status(404).json(error)
  }
 }

 //delete wishlist product
 exports.deleteWishlist=async(req,res)=>{
    //get id from the request
    const{id}= req.params
    //logic for delete wishlist product details
    try{
      const removewishlist = await wishlists.deleteOne({id})
      //get all wishlist product after removing particular product
      if(removewishlist){
        const allitems= await wishlists.find()
        res.status(200).json(allitems)
      }
     
    }
    catch(error){
       res.status(404).json(error)
    }
 }
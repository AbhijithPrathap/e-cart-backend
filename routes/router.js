//inside router.js file ,import express
 const express=require('express')

 //import product controller
 const productController= require('../controllers/productController')

 //import wishlist controller
 const wishlistController=require('../controllers/wishlistController')

 //import cart controller
 const cartController= require('../controllers/cartController')

 //using express create an objecr for router class inorder to setup path
 const router=new express.Router()

 //resolve client request in various server routes
 //all api call will be resolved


 //get all products
 router.get('/products/all-products',productController.getAllProducts)

// view product
router.get('/products/viewproduct/:id',productController.viewProduct)

//add to wishlist
router.post('/products/addtowishlist',wishlistController.addtowishlist)

//get wishlist details
router.get('/products/getwishlist',wishlistController.getWishlist)

//remove particular product from wishlist
router.delete('/products/deletewishlist/:id',wishlistController.deleteWishlist)

//add to cart
router.post('/products/addtocart',cartController.addToCart)

//get cart
router.get('/products/getcart',cartController.getCart)

//delete cart
router.delete('/products/deletecart/:id',cartController.removeCartItem)

//increment cart count
router.get('/products/increment/:id',cartController.incrementCart)

//decrement cart count
router.get('/products/decrement/:id',cartController.decrementCart)

 //export router
 module.exports=router
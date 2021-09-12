const express = require('express');
const router = express.Router();
const sanitize = require('mongo-sanitize');
const { User } = require('../models/userSchema');
const { Product } = require('../models/productSchema');
var qs = require('querystring');
require('../db/conn');

router.post('/addProduct', async (req, res) => {
    try {
        const { title, imageUrl, price } = sanitize(req.body);
        const prod = new Product({ title, imageUrl, price });
        const Save = await prod.save();
        if (Save) {
            res.status(201).json({ status: true });
        }
    } catch (err) {
        console.log(err);
    }
});

router.post('/addToCart', async (req, res) => {
    try {
        console.log(req.session.userProfile);
        product = await Product.findById(req.body.id);
        userDb = await User.findById('6118b8f8f2fa533d545fe6e8');
        if (userDb) {
            userDb.addToCart(product);
            //res.redirect('/');
            res.json({
                message: "Product added to Cart"
            });
        }else{
            res.redirect('/login');
        }
    } catch (err) {
        console.log(err);
    }
});

router.get('/cart',async(req,res)=>{
    try{
        const user= await User.findById('610640739a67782df084ea4b');
        if(user){
            res.send({user:user});
        }
    }catch(err){ console.log(err); }
}); 

var body='';

router.post('/deleteInCart',async(req,res)=>{
    try{
        req.on('data', (data)=>{
            body += data;
            POST =  qs.parse(body);})
        userDb = await User.findById('610640739a67782df084ea4b');
        await userDb.removeItem(POST.prodId);
        res.redirect('/cart');
    }catch(err){
        console.log(err);
    }
})

router.post('/do-addAddress',async (req, res) => {
    try{
        add= req.body;
        userDb = await User.findById('610640739a67782df084ea4b');
        if (userDb) {
            const save=await userDb.addAddress(add);
            if(save){
            res.send({
                message: "address added!"
            });
        }else{
            console.log('no');
        }
        }else{
            res.redirect('/login');
        }
    }catch(err){ console.log(err); }
});


module.exports = router;
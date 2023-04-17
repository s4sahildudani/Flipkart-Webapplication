const express = require("express");
const cors =require("cors");
const {v4 : uuidv4} = require("uuid");
const stripe = require("stripe")("sk_test_51Mxc4RSHVreC2R70B58zAlHUwR7gmRvqOnWad3w9ddGB85sdWllA3YAu1rOqhe9kpLg8c6a7AHd8aMdLGXeZAU2a00noPFAmca");
const app = express();
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Welcome to the Flipkart Webapp");
})
app.post('/checkout',async(req,res)=>{
    let error;
    let status;
    try{
        const {cart,token}=req.body;
        const customer = await stripe.customers.create({
            email:token.email,
            source:token.id,
        })
        const key = uuidv4();
        const charge = await stripe.charges.create({
            amount:cart.totalprice*100,
            currency:"usd",
            customer:customer.id,
            receipt_email:token.email,
            description:"Production Description here",
            shipping:{
            name:token.card.name,
            adress:{
                line1:token.card.adress_line1,
                line2:token.card.adress_line2,
                city:token.card.adress_city,
                country:token.card.adress_country,
                postalcode:token.card.adress_zip
            }
            }
        },({idempotency:key}))
        status = "success"
    } 
    catch(error){
        console.log(error);
        status= "error"
    }
    res.json({status})
})
app.listen(8080,()=>{
    console.log("Your Port is running on 8080");
})
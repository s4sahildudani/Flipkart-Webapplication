const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors())
require("dotenv").config();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const port = process.env.PORT;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
app.get("/",(req,res)=>{
    res.send("Hello world!")
})
app.post("/pay",async(req,res)=>{
  try {
    console.log(req.body.token);
    const pay = await stripe.charges.create({ 
       source:req.body.token.id,
       amount:req.body.amount,
       currency:"GDP"
    })
    console.log("pay",pay)
    // const session = await stripe.checkout.sessions.create({
    //     success_url: 'http://localhost:3000/cart',
    //     line_items: [
    //       {price: 'price_1MzErUSHVreC2R70cCzpajI4', quantity: 1},
    //     ],
    //     mode: 'payment',
    //   });
    //   console.log("session",session)
  } catch (error) {
    console.log("error",error)
  }
})

app.listen(port,()=>{
    
    console.log(`Server is running on port ${port}`)
})
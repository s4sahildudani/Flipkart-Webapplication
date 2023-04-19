// const express = require("express");
// const app = express();
// require("dotenv").config();
// const stripe = require("stripe")(
//   "sk_test_51Mxc4RSHVreC2R70B58zAlHUwR7gmRvqOnWad3w9ddGB85sdWllA3YAu1rOqhe9kpLg8c6a7AHd8aMdLGXeZAU2a00noPFAmca"
// );
// const bodyparser = require("body-parser");
// const cors = require("cors");
// app.use(bodyparser.urlencoded({ extended: true }));
// app.use(bodyparser.json());
// app.use(cors());
// app.post("/payment", cors(), async (req, res) => {
//   let { amount, id } = req.body;
//   try {
//     const payment = await stripe.paymentIntents.create({
//       amount,
//       currency: "USD",
//       description: "Flipkart-webapp",
//       payment_method: id,
//       confirm: true,
//     });
//     console.log("payments", payment);
//     res.json({
//       message: "Payment Successfull",
//       success: true,
//     });
//   } catch (error) {
//     console.log("Error", error);
//     res.json({
//       message: "Payment failed",
//       success: false,
//     });
//   }
// });
// app.listen(process.env.PORT || 4000, () => {
//   console.log("Server is running on port 4000");
// });
require('dotenv').config() 
const express=require('express')
const cors=require('cors')
const stripe =require('stripe')(process.env.STRIPE_KEY)
const app=express()
app.use(cors())
app.use(express.json())


const store=new Map()
store.set(1,{name:'Apple AirPods PRO',price:2054500})

app.post('/checkout',async(req,res)=>{
    const items=[req.body]
    try{
        const session=await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            mode:'payment',
            line_items:items.map(ele=>{
                const productDetailFromServer=store.get(ele.id)
                return {
                    price_data:{
                        currency:'inr',
                        product_data:{
                            name:productDetailFromServer.name
                        },
                        unit_amount:productDetailFromServer.price
                    },
                    quantity:ele.quantity
                }
            }),
            success_url:'http://localhost:5173/success',
            cancel_url:'http://localhost:5173/cancel'
        })
        res.json({url:session.url})
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }

    })


app.listen(3000,()=>console.log("listening"))


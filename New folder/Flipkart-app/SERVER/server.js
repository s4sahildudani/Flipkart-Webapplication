// const express = require("express");
// const app = express();
// const cors = require("cors");
// app.use(cors());
// require("dotenv").config();
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// const port = process.env.PORT;
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });
// app.post("/pay", async (req, res) => {
//   try {
//     console.log(req.body.token);
//     const pay = await stripe.charges.create({
//       source: req.body.token.id,
//       amount: req.body.amount,
//       currency: "inr",shipping: {
//                   name: token.card.name,
//                   address: {
//                     line1: token.card.address_line1,
//                     line2: token.card.address_line2,
//                     city: token.card.address_city,
//                     country: token.card.address_country,
//                     postal_code: token.card.address_zip,
//                   },
//                 },
//     });
//     console.log("pay", pay);
//     // const session = await stripe.checkout.sessions.create({
//     //     success_url: 'http://localhost:3000/cart',
//     //     line_items: [
//     //       {price: 'price_1MzH6lSHVreC2R70sBXZfNct', quantity: 1},
//     //     ],
//     //     mode: 'payment',
//     //   });
//     //   console.log("session",session)
//   } catch (error) {
//     console.log("error", error);
//   }
// });
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


// All Products  

// Stripe key : sk_test_51Mxc4RSHVreC2R70B58zAlHUwR7gmRvqOnWad3w9ddGB85sdWllA3YAu1rOqhe9kpLg8c6a7AHd8aMdLGXeZAU2a00noPFAmca
// Addidas shoes : price_1MzH6lSHVreC2R70sBXZfNct
// Puma shoes : price_1MzErUSHVreC2R70cCzpajI4 

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51Mxc4RSHVreC2R70B58zAlHUwR7gmRvqOnWad3w9ddGB85sdWllA3YAu1rOqhe9kpLg8c6a7AHd8aMdLGXeZAU2a00noPFAmca");

const app = express ();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout",async (req,res)=>{
  // req.body.items
  // [
  //   {id:1,
    
  //   quantity:1}
  // ]

  // stripe wants 
  // [
  //   {
  //     price:1,
  //     quantity:3
  //   }
  // ]
  console.log(req.body);
  

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {price: 'price_1MzErUSHVreC2R70cCzpajI4', quantity: 1},
   ],
    mode:'payment',
    success_url:"http://localhost:3000/success",
    cancel_url:"http://localhost:3000/cancel"
  });

  res.send(JSON.stringify({
    url:session.url
  }))
})
app.listen(4000,() => console.log("Listening on port 4000"))
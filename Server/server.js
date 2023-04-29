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
const bodyParser = require("body-parser");
const stripe = require("stripe")(
  "sk_test_51Mxc4RSHVreC2R70B58zAlHUwR7gmRvqOnWad3w9ddGB85sdWllA3YAu1rOqhe9kpLg8c6a7AHd8aMdLGXeZAU2a00noPFAmca"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  bodyParser.json({
    verify: (request, response, buf) => {
      request.rawbody = buf;
    },
  })
);
app.post("/checkout", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [{ price: "price_1N11EmSHVreC2R70jYBQBdFN", quantity: 1 }],
    mode: "payment",
    success_url:
      "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: "http://localhost:3000/cancel",
    metadata: {
      integration_check: "accept_a_payment",
      
    },
  });
  console.log("session",session);
  res.send(
    JSON.stringify({
      url: session.url,
      session,
    })
  );
});

// app.post('/webhook',bodyParser.raw({type:express.application/bodyParser.json}),async(request,response)=>{
//   let signingsecret = " whsec_f03872a62ffaff716fbe12f7e1b2d0d1e880070bb74b8bca167b27fd6664c5a3";
//   const payload = request.body
//   const sig = request.headers['stripe-signature']

//   let event
//   try{
//      event = stripe.webhooks.constructEvent(payload,sig,signingsecret)
//   }
//   catch(error){
//       console.log(error.message)
//       response.status(400).json({success:false})
//       return
//   }
//   console.log(event.type)
//   console.log(event.data.object)
//   console.log(event.data.object.id)
// })

app.post("/webhook", express.raw({ type: "application/json" }), (req, res) => {
  const sig = req.headers["stripe-signature"];
  let endpointSecret;

  endpointSecret =
    "whsec_f03872a62ffaff716fbe12f7e1b2d0d1e880070bb74b8bca167b27fd6664c5a3";
  let data;
  let eventType;
  if (endpointSecret) {
    let event;
    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
      // res.status(400).send(`Webhook Error: ${err.message}`);
      // res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
    data = event.data.object;
    eventType = event.type;
  } else {
    data = req.body.data.object;
    eventType = req.body.type;
  }

  if (eventType === "checkout.session.completed") {
    console.log("data", data);
    // console.log("Inside checkout.session.completed event block");
    // stripe.sessions
    //   .retrieve(data.session)
    //   .then((session) => {
    //     console.log("session", session);
    //     console.log("data", data);
    //   })
    //   .catch((err) => console.log(err.message));
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send().end();
});
app.listen(4000, () => console.log("Listening on port 4000"));

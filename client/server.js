// // const express = require("express");
// // const cors = require("cors");
// // const { v4: uuidv4 } = require("uuid");
// // const stripe = require("stripe")(
// //   "sk_test_51Mz5bbSCs15U8eshxM6PNEuKn02RZmi8TMFhY7xIrqEhz77BbW2D1v8oX8Bw9AHve9COnWAgE9ZxMUNxnZjjUxR700yZGVz3OX"
// // );
// // const app = express();

// // app.use(cors());
// // app.use(express.json());

// // app.get("/", (req, res) => {
// //   res.send("Welcome to the Flipkart Webapp");
// // });

// // app.post("/checkout", async (req, res) => {
// //   let error;
// //   let status;
// //   try {
// //     const { cart, token } = req.body;

// //     const customer = await stripe.customers.create({
// //       email: token.email,
// //       source: token.id,
// //     });

// //     const key = uuidv4();

// //     const charge = await stripe.charges.create(
// //       {
// //         amount: 1000,
// //         currency: "USD",
// //         customer: customer.id,
// //         receipt_email: token.email,
// //         description: "Production Description here",
// //         shipping: {
// //           name: token.card.name,
// //           address: {
// //             line1: token.card.address_line1,
// //             line2: token.card.address_line2,
// //             city: token.card.address_city,
// //             country: token.card.address_country,
// //             postal_code: token.card.address_zip,
// //           },
// //         },
// //       },
// //       { idempotencyKey: key }
// //     );
// //     console.log("charge",charge);
// //     status = "success";
// //   } catch (error) {
// //     console.log(error);
// //     status = "error";
// //   }

// //   res.json({ status });
// // });

// // app.listen(8080, () => {
// //   console.log("Your Port is running on 8080");
// // });
// // const stripe = require('stripe')('sk_test_51Mxc4RSHVreC2R70B58zAlHUwR7gmRvqOnWad3w9ddGB85sdWllA3YAu1rOqhe9kpLg8c6a7AHd8aMdLGXeZAU2a00noPFAmca');

// // const session = await stripe.checkout.sessions.create({
// //   success_url: 'https://example.com/success',
// //   line_items: [
// //     {price: 'price_H5ggYwtDq4fbrJ', quantity: 2},
// //   ],
// //   mode: 'payment',
// // });

// // require("dotenv").config({ path: "./env.local" });
// // const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// // const express = require("express");
// // const bodyParser = require("body-parser");
// // const app = express();
// // const { resolve } = require("path");

// // app.use(bodyParser.json());
// // app.use(
// //   express.json({
// //     // We need the raw body to verify webhook signatures.
// //     // Let's compute it only when hitting the Stripe webhook endpoint.
// //     verify: function(req, res, buf) {
// //       if (req.originalUrl.startsWith("/webhook")) {
// //         req.rawBody = buf.toString();
// //       }
// //     }
// //   })
// // );

// // app.get("/", (req, res) => {
// //   res.send("Hello from API");
// // });

// // app.get("/public-key", (req, res) => {
// //   res.send({ publishableKey: process.env.STRIPE_PUBLISHABLE_KEY });
// // });

// // app.get("/product-details", (req, res) => {
// //   let data = getProductDetails();
// //   res.send(data);
// // });

// // app.post("/create-payment-intent", async (req, res) => {
// //   const body = req.body;
// //   const productDetails = getProductDetails();

// //   const options = {
// //     ...body,
// //     amount: productDetails.amount,
// //     currency: productDetails.currency
// //   };

// //   try {
// //     const paymentIntent = await stripe.paymentIntents.create(options);
// //     res.json(paymentIntent);
// //   } catch (err) {
// //     res.json(err);
// //   }
// // });

// // let getProductDetails = () => {
// //   return { currency: "EUR", amount: 9900 };
// // };

// // // Webhook handler for asynchronous events.
// // app.post("/webhook", async (req, res) => {
// //   let data;
// //   let eventType;
// //   // Check if webhook signing is configured.
// //   if (process.env.STRIPE_WEBHOOK_SECRET) {
// //     // Retrieve the event by verifying the signature using the raw body and secret.
// //     let event;
// //     let signature = req.headers["stripe-signature"];

// //     try {
// //       event = stripe.webhooks.constructEvent(
// //         req.rawBody,
// //         signature,
// //         process.env.STRIPE_WEBHOOK_SECRET
// //       );
// //     } catch (err) {
// //       console.log(`⚠️ Webhook signature verification failed.`);
// //       return res.sendStatus(400);
// //     }
// //     // Extract the object from the event.
// //     data = event.data;
// //     eventType = event.type;
// //   } else {
// //     // Webhook signing is recommended, but if the secret is not configured in `config.js`,
// //     // retrieve the event data directly from the request body.
// //     data = req.body.data;
// //     eventType = req.body.type;
// //   }

// //   if (eventType === "payment_intent.succeeded") {
// //     // Fulfill any orders, e-mail receipts, etc
// //     console.log("💰 Payment received!");
// //   }

// //   if (eventType === "payment_intent.payment_failed") {
// //     // Notify the customer that their order was not fulfilled
// //     console.log("❌ Payment failed.");
// //   }

// //   res.sendStatus(200);
// // });

// // app.listen(4242, () => console.log(`Node server listening on port ${4242}!`));
// // Set your secret key. Remember to switch to your live secret key in production.
// // See your keys here: https://dashboard.stripe.com/apikeys
// // Set your secret key. Remember to switch to your live secret key in production.
// // See your keys here: https://dashboard.stripe.com/apikeys
// const express = require('express');
// const app = express();
// const stripe = require('stripe')('sk_test_51Mxc4RSHVreC2R70B58zAlHUwR7gmRvqOnWad3w9ddGB85sdWllA3YAu1rOqhe9kpLg8c6a7AHd8aMdLGXeZAU2a00noPFAmca')

// app.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'T-shirt',
//           },
//           unit_amount: 2000,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: 'http://localhost:4242/success',
//     cancel_url: 'http://localhost:4242/cancel',
//   });

//   res.redirect(303, session.url);
// });

// app.listen(4242, () => console.log(`Listening on port ${4242}!`));
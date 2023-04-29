import Stripe from 'stripe';
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)
export default async function handler(req,res){
    try{
      if(req.method != "POST")return res.status(400);
      const {name,email,paymentMethod} =req.body;
      const customer = await stripe.customer.create({
        email,name,paymentMethod:paymentMethod,invoice_settings : {default_payment_method : paymentMethod}
      });
      const product = await stripe.products.create({
       name:"Monthly Subscription"
      });
      const subscription = await stripe.subscriptions.create({
        customer:customer.id,
         items : [
           {
            price_data :{
                currency:"INR",
                product:product.id,
                unit_amount:"500",
                reccuring:{
                    interval:"month"
                }
            }
           } 
         ],
         payment_settings :{
            payment_method_types:["Card"],
            save_default_payment_method:"on subscription"
         },
         expand :["latest_invoice.payment_intent"]
      });
      res.json({
         message:"subscription successfull",
         clientSecret:subscription.latest_invoice.payment_intent.client_secret,
         subscriptionId:subscription.id
      })
    }catch(err){
      console.log(err);
      res.status(500).json({message:"Interval Server Error"})
    }
}
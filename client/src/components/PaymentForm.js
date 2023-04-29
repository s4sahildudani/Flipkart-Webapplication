

import React ,{useState} from 'react'
import {CardElement,useElements ,useStripe} from '@stripe/react-stripe-js'
function PaymentForm() {
    const [name,setName] = useState("");
    const [email,setEmail]  = useState("");
    const stripe = useStripe();
    const elements = useElements();

    const createSubscription = async() =>{
        try{
          const paymentMethod = await stripe.createPaymentMethod({
            type:"card",
            card:elements.getElement("card")
          });
          const response = await fetch ("api/subscribe",{
            method:"POST",
            headers:{
                "content-Type" : "application/json"
            },
            body:JSON.stringify({
                name,email,paymentMethod:paymentMethod.paymentMethod.id
            }),
            
          });
          if(!response.ok) return alert("Payment Unsuccessfull");
          const data = await response.json();
          const confirm = await stripe.confirmCardPayment(data.clientSecret);
          if(confirm.error) return("Payment Unsuccessfull");
          alert("Payment Successfull");
        }catch(error){
            console.log(error);
            alert("Payment Failed")
        }
    }
  return (
    <div>

        <input 
         value={name}
         onChange={(e) =>setName(e.target.value)}
        />
        <input 
         value={email}
         onChange={(e) =>setEmail(e.target.value)}
        />
        <CardElement />
        <button onClick={createSubscription}>Subscription</button>
    </div>
  )
}

export default PaymentForm
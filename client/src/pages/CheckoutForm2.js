import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const CheckoutForm2 = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [processing, setProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    setErrorMessage(null);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        name: "John Doe",
        email: "johndoe@example.com",
        address: {
          line1: "123 Main St",
          line2: "",
          city: "Mumbai",
          state: "Maharashtra",
          postal_code: "400001",
          country: "IN",
        },
      },
    });

    if (error) {
      setErrorMessage(error.message);
      setProcessing(false);
      return;
    }

    // Call your backend API to create a charge using the payment method ID
    const response = await fetch("/create-charge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ payment_method_id: paymentMethod.id }),
    });

    const data = await response.json();

    if (response.ok) {
      setSucceeded(true);
      setProcessing(false);
    } else {
      setErrorMessage(data.error);
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Card details
          <CardElement />
        </label>
      </div>
      {errorMessage && <div>{errorMessage}</div>}
      {succeeded && <div>Payment succeeded!</div>}
      <button type="submit" disabled={processing}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm2;

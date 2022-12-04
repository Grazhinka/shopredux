import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { getTotals } from "../Redux/cartSlice";


export const CheckoutForm = ({sumWithSale}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [success,setSuccess]=useState(false)


  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "http://localhost:8080/stripe/charge",
          {
            amount: sumWithSale*100,
            id: id,
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
          setSuccess(true)
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
      alert('Ошибка!')
    }
  };

  return (
    <div className="pay">
        {!success?(
        <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
           <CardElement  />
           <button style={{marginTop:'15px',fontSize:'25px'}} className="usePromo">Оплатить</button>
        </form>
        ):(
        <div>
            <h1>Успешно оплачено!</h1>
        </div>)  
        }
    </div>
  );
};
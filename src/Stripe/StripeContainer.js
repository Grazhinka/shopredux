import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51MB0M8CtM5DdivMQLDqdwh9wEcsyAENUAzxhttECpJ2m5c0BgSFLpMBDcCobNQ2r0nWOaheeOzMjupUYPWKJndH400pFtg2D5D";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = ({sumWithSale}) => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm sumWithSale={sumWithSale}/>
    </Elements>
  );
};

export default Stripe;
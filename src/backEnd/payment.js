import React from "react";
import StripeContainer from "../Stripe/StripeContainer";

const Pay = ({sumWithSale}) => {
  return (
    <div className="App">
      <StripeContainer sumWithSale={sumWithSale} />
    </div>
  );
};

export default Pay;
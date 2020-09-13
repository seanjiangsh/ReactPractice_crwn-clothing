import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StriptCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HPd44DGvQwgB8HFNHHN6yuoOWTkbQR8h6TDgRgB4AzLdl199vNOyY7jdL9en9jHHZk5WVNnuJwWlV3ZhU3R30O100v8MupaEG";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successfule");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StriptCheckoutButton;

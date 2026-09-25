import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default class MyApp extends React.Component {
  render() {
    const clientClientId = process.env.REACT_APP_APP_ID;
    const currency = "SEK";

    // Correct syntax: Direct assignment without curly braces.
    // Using String(...) ensures PayPal gets a string value (e.g., "10.00").
    const total = String(this.props.total);

    const initialOptions = {
      "client-id": clientClientId,
      currency: currency,
      intent: "capture",
    };

    return (
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: total, // Now dynamically passes your cart total
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const details = await actions.order.capture();
            console.log("The payment succeeded!", details);
            this.props.clearCart();

            // Defer navigation until React finishes the clearCart state update
            setTimeout(() => {
              this.props.history.push("/");
            }, 0);
          }}
          onCancel={(data) => {
            console.log("The payment was cancelled!", data);
          }}
          onError={(err) => {
            console.error("Error with PayPal script or checkout!", err);
          }}
        />
      </PayPalScriptProvider>
    );
  }
}

import React from "react";
import { Link } from "react-router-dom";
import PayPalButton from "./PayPalButton";

export default function CartTotals({ value, history }) {
  const { cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ms-sm-5 ms-md-auto col-sm-8 text-capitalize text-end">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                töm kundkorgen
              </button>
            </Link>
            <h5>
              <span className="text-title">Att betala : </span>
              <strong>{cartTotal} kr</strong>
            </h5>
            <div className="ms-auto mt-3" style={{ maxWidth: "17.5rem" }}>
          <PayPalButton total={cartTotal} clearCart={clearCart} history={history}/>
        </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

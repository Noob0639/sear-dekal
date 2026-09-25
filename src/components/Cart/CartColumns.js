import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">produkter</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">produktnamn</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">pris</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">antal</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">ta bort</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">totalt</p>
        </div>
      </div>
    </div>
  );
}

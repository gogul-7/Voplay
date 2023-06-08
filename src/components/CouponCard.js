import React from "react";
import "./CouponCard.css";

function CouponCard(item) {
  return (
    <div className="card">
      <div className="offerPart">
        <p>{item.item.card_type}</p>
      </div>
      <div className="container">
        <h4>
          <b>{item.item.name}</b>
        </h4>
        <p>{item.item.budget_name}</p>
      </div>
    </div>
  );
}

export default CouponCard;

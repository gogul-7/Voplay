import React, { useState, useEffect } from "react";
import CouponCard from "./CouponCard";
function Your() {
  const [userData, setUserData] = useState([]);
  const fetchData = async () => {
    await fetch("/data.json")
      .then((data) => data.json())
      .then((res) => {
        const filteredData = res.data.filter((item) => item.owner_id === 1);
        setUserData(filteredData);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="cards">
      {userData.map((coupon) => (
        <CouponCard item={coupon} />
      ))}
    </div>
  );
}

export default Your;

import React, { useState } from "react";
import { useEffect } from "react";
import CouponCard from "./CouponCard";
import "./Maincourse.css";
function Maincourse() {
  const [userData, setUserData] = useState([]);
  const fetchData = async () => {
    await fetch("/data.json").then((data) =>
      data.json().then((res) => setUserData(res.data))
    );
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

export default Maincourse;

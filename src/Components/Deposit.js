import React, { useState, useEffect } from "react";

function Deposit() {
  const [depositRate, setDepositRate] = useState([]);
  const [accountType, setAccountType] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://developer.sbab.se/sandbox/api/interest-rates/2.1/deposit-rates"
      );
      const data = await response.json();

      setDepositRate(
        data.deposit_rates[0].deposit_rate_components[0].deposit_rate
      );
      setAccountType(data.deposit_rates[0].account_type);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p> - {depositRate}%</p>
    </div>
  );
}

export default Deposit;

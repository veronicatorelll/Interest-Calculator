import React, { useEffect, useState } from "react";
import compare from "../assets/Compare.svg";
import percentage from "../assets/Percentage.svg";
import Deposit from "../Components/Deposit";
import Mortgage from "../Components/Mortgage";

function InterestPage() {
  const [depositRate, setDepositRate] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://developer.sbab.se/sandbox/api/interest-rates/2.1/deposit-rates"
      );
      const data = await response.json();

      setDepositRate(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Din räntekostnad</h1>

      <p className="per-month">
        {" "}
        Här ser du både våra aktuella boräntor och din räntekostnad per månad
      </p>

      <div className="percentage">
        <img height={120} src={percentage} alt="" />
      </div>

      <p className="direct">Få fram din räntekostnad direkt</p>
      <hr className="hr"></hr>

      <form className="form-wrapper">
        <label>
          Önskat lånebelopp
          <input placeholder="2 000 000" type="text " name="text" />
        </label>

        <label>
          Välj bindningstid
          <select>
            <option value="">
              {<Mortgage />}
              {<Deposit />}
            </option>
          </select>
        </label>
      </form>

      <h2>Din räntekostnad - {} 0.5 %</h2>
      <hr className="hr"></hr>
      <h1 className="month"> {} 2 933 kr / mån </h1>
      <div className="compare">
        <img height={120} src={compare} alt="" />
      </div>
    </div>
  );
}
export default InterestPage;

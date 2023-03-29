import React, {useState, useEffect} from 'react'

function Mortgage() {
    const [mortgageRate, setMortgageRate] = useState("");
    const [bindingPeriod, setBindingPeriod] = useState("");


     const fetchData = async () => {
      try {
        const response = await fetch(
            "https://developer.sbab.se/sandbox/api/interest-rates/2.0/mortgage-rates"
        );
        const data = await response.json();
  
        setMortgageRate(data.mortgage_rates[0].mortage_rate);
        setBindingPeriod(data.mortgage_rates[0].binding_period_in_months)

      } catch (error) {}
    };
  
    useEffect(() => {
      fetchData();
    }, []);


  return (
    <div>
        <p>{bindingPeriod} mån</p>
        <p>{mortgageRate}</p>
    </div>
  )
}

export default Mortgage
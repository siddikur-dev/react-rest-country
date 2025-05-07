import React, { useState } from "react";
import "./County.css";
const Country = ({ country, handleVisitedCountries, handleFlags }) => {
  const [visite, setVisite] = useState(false);

  const handleVisited = () => {
    setVisite(!visite);
    handleVisitedCountries(country);
  };
  return (
    <div className={`border  ${visite && "newStyle"}`}>
      <img src={country.flags.png} alt="" />
      <h2>Name: {country.name.official}</h2>
      <h2>Independent: {country.independent ? "Shadhin" : "Not Shadhin"}</h2>
      <h2>Population: {country.population}</h2>
      <button onClick={handleVisited}>
        {visite ? "Visited" : "Not Visited"}
      </button>
      <button onClick={() => handleFlags(country.flags.png)}>Add Flags</button>
    </div>
  );
};

export default Country;

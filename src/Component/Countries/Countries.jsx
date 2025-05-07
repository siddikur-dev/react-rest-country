import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = ({ fetchPro }) => {
  const allCountries = use(fetchPro);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = (country) => {
    const visitCountriess = [...visitedCountries, country];
    setVisitedCountries(visitCountriess);
  };
  // Flag
  const [handleFlag, setHandleFlag] = useState([]);
  const handleFlags = (flag) => {
    const allFlags = [...handleFlag, flag];
    setHandleFlag(allFlags);
  };
  return (
    <div>
      <ol className="countries ">
        {visitedCountries.map((country, i) => (
          <div key={i} className="border">
            <li> Name:{country.name.common}</li>
            <li>Region: {country.region}</li>
          </div>
        ))}
      </ol>
      <div className="countries">
        {handleFlag.map((flag) => (
          <img src={flag} alt="" />
        ))}
      </div>
      {/*  */}
      <h1>Visit Country List: {visitedCountries.length}</h1>
      <h2>We are traveling {allCountries.length}</h2>
      <div className="countries ">
        {allCountries.map((country, population) => (
          <Country
            country={country}
            key={population}
            handleVisitedCountries={handleVisitedCountries}
            handleFlags={handleFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

import React, { use } from "react";
import Country from "../Country/Country";

const Countries = ({ fetchPro }) => {
  const allCountries = use(fetchPro);
  return (
    <div>
      <h2>We are traveling {allCountries.length}</h2>
      {allCountries.map((country,population) => (
        <Country country={country} key={population}></Country>
      ))}
    </div>
  );
};

export default Countries;

import React from "react";

const Country = ({ country }) => {
  console.log(country);
  // const {common}=country
  const style = {
    border: "2px solid green",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
  };
  return (
    <div style={style}>
      <img src={country.flags.png} alt="" />
      <h2>Name: {country.name.official}</h2>
      <h2>Independent: {country.independent ? "Shadhin" : "Not Shadhin"}</h2>
      <h2>Population: {country.population}</h2>
    </div>
  );
};

export default Country;

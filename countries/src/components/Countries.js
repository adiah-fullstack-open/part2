import React from "react";

const Countries = ({ list }) => {
  return (
    <>
      {list.map((country) => (
        <li key={country.cca3}>{country.name.official}</li>
      ))}
    </>
  );
};

export default Countries;

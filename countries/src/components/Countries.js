import React from "react";

const Countries = ({ list, getSingleCountry }) => {
  return (
    <>
      {list.map((country) => (
        <li key={country.cca3}>
          {country.name.official}{" "}
          <button onClick={() => getSingleCountry(country.name.official)}>
            show
          </button>
        </li>
      ))}
    </>
  );
};

export default Countries;

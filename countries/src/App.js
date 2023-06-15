import React, { useEffect, useState } from "react";
import Countries from "./components/Countries";
import countriesService from "./services/countries";

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countriesService.getAll().then((countriesList) => {
      // setCountries(countriesList);
      const filteredList = countriesList.filter((country) =>
        country.name.official.toLowerCase().includes(search.toLowerCase())
      );
      console.log(filteredList);
      setCountries(filteredList);
    });
  }, [search]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      find countries <input onChange={handleSearchChange} value={search} />
      {countries.length <= 10 ? (
        <Countries list={countries} />
      ) : (
        "Too many matches, specify another filter"
      )}
    </div>
  );
};

export default App;

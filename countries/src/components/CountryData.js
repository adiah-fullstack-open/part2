import React from "react";

const CountryData = ({ country }) => {
  const languages = [];
  for (const lang in country.languages) {
    languages.push({ code: lang, language: country.languages[lang] });
  }

  return (
    <div>
      <h1 className="name">{country.name.common}</h1>
      <p>capital: {country.capital[0]}</p>
      <p>area: {country.area}</p>
      <h2>languages</h2>
      <ul>
        {languages.map((lang) => (
          <li key={lang.code}>{lang.language}</li>
        ))}
      </ul>
      <img src={country.flags.svg} alt={country.flags.alt} className="flag" />
    </div>
  );
};

export default CountryData;

import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import './CountryDetails.css'

const CountryDetails = () => {
  const country = useLoaderData()[0];
  const { capital, flags, name, region, timezones, area } = country;

  return (
    <div className="country-details">
      <Link to="/countries">Go back countries</Link>
      <h1>{name.common}</h1>
      <img src={flags.png} alt={name.common} />
      <h2>Official Name: {name?.official}</h2>
      <h3>Capital: {capital[0]}</h3>
      <p>
        <b>Region:</b> {region}
      </p>
      <p>
        <b>Timezones:</b> {timezones[0]}
      </p>
      <p>
        <b>Area:</b> {area}
      </p>
    </div>
  );
};

export default CountryDetails;

import React, { useState } from "react";
import "./country.css";

const Country = ({ country }) => {
  //   console.log(country);
  const [visited, setVisited] = useState(false);
  const handleVisit = () => {
    setVisited(!visited);
  };

  return (
    <div className={`${visited ? "country-visited" : "country"}`}>
      <img
        className="flag"
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
      />
      <h2>Name: {country.name.common} </h2>
      <h4>Population: {country.population.population} </h4>
      <h4>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}{" "}
      </h4>
      <button onClick={handleVisit} className="btn">
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;

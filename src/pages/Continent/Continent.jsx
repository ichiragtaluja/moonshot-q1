import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { useNavigate } from "react-router-dom";

export const Continent = () => {
  const navigate = useNavigate();
  const continents = useData();
  const { continentId } = useParams();

  const continent = continents?.continents?.find(
    ({ id }) => id === Number(continentId)
  );

  return (
    <div>
      <h1>Top countries in {continent?.name} for you</h1>
      <div className="container">
        {continent?.countries?.map((country) => (
          <div
            key={country?.id}
            onClick={() => navigate(`/countries/${continentId}/${country?.id}`)}
          >
            <div className="img-container">
              <img src={country?.image} />
            </div>
            <div className="name">{country?.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { useParams } from "react-router-dom";

export const Destinations = () => {
  const navigate = useNavigate();
  const continents = useData();
  const { countryId, continentId } = useParams();

  const continent = continents?.continents?.find(
    ({ id }) => id === Number(continentId)
  );


  const destinations = continent?.countries?.find(
    ({ id }) => id === Number(countryId)
  );

  return (
    <div>
      <h1>Top destinations in {destinations?.name}</h1>
      <div className="container">
        {destinations?.destinations?.map((destination) => (
          <div
            key={destination?.id}
            onClick={() =>
              navigate(
                `/countries/${continentId}/${countryId}/${destination?.id}`
              )
            }
          >
            <div className="img-container">
              <img src={destination?.image} />
            </div>
            <div className="name">{destination?.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

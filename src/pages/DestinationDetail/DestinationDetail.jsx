import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import { useParams } from "react-router-dom";

export const DestinationDetail = () => {
  const navigate = useNavigate();
  const continents = useData();
  const { countryId, continentId, destinationId } = useParams();

  const continent = continents?.continents?.find(
    ({ id }) => id === Number(continentId)
  );

  const destinations = continent?.countries?.find(
    ({ id }) => id === Number(countryId)
  );

  const selectedDestination = destinations?.destinations?.find(
    ({ id }) => id === Number(destinationId)
  );
  return (
    <div>
      <h1>{selectedDestination?.name}</h1>
      <p>Description:{selectedDestination?.description}</p>
      <p>Rating: {selectedDestination?.ratings}</p>
      <img src={selectedDestination?.image} />
      <p> Website: {selectedDestination?.website}</p>
      <p>Ticket Price: {selectedDestination?.ticketPrice}</p>
    </div>
  );
};

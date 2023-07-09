import "./Home.css";
import React from "react";
import { useData } from "../../contexts/DataContext";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { continents } = useData();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to Trip Advisor</h1>
      <h2>Top Continents for your next Holiday</h2>
      <div className="container">
        {continents?.map((continent) => (
          <div
            key={continent?.id}
            onClick={() => navigate(`/countries/${continent?.id}`)}
          >
            <div className="img-container">
              <img src={continent?.image} />
            </div>
            <div className="name">{continent?.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

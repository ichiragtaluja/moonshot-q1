import "./Home.css";
import React from "react";
import { useActionData } from "react-router-dom";
import { useData } from "../../contexts/DataContext";

export const Home = () => {
  const {} = useData();
  return <div>Home</div>;
};

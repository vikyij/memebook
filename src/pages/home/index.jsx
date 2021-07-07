import React from "react";
import Navigation from "../../components/Navigation";
import Cards from "../../components/Cards"
import styles from "./home.module.css";

const Home = () => {
  const { wrapper } = styles;

  return (
    <div className={wrapper}>
      <Navigation />
      <Cards />
   </div>
  );
};

export default Home;

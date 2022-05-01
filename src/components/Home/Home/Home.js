import React from "react";
import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import Inventorys from "../Inventorys/Inventorys";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Banner/>
      <Inventorys/>
      <Brand />
      <Review />
    </div>
  );
};

export default Home;

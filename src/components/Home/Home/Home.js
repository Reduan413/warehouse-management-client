import React from "react";
import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";
import Products from "../Products/Products";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Banner/>
      <Products/>
      <Brand />
      <Review />
    </div>
  );
};

export default Home;

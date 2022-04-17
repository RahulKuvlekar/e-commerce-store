import React from "react";
import Carousel from "../../Components/UI/Carousel/Carousel";
import { carouselData } from "../../Components/UI/Carousel/carouselData";
import RowSlider from "../../Components/UI/RowSilder/RowSlider";
import { categories } from "../../backend/db/categories";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Carousel data={carouselData} height="90vh" width="100vw" />
      <RowSlider title="Category" data={categories} card={true} />
    </div>
  );
};

export default Home;

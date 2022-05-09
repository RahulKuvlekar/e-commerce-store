import "./Home.css";
import Carousel from "../../Components/UI/Carousel/Carousel";
import { carouselData } from "../../Components/UI/Carousel/carouselData";
import RowSlider from "../../Components/UI/RowSilder/RowSlider";
import { useProductContext } from "../../Hooks/useProductContext";
import { brand } from "../../backend/db/brand";

const Home = () => {
  const { productState } = useProductContext();
  const { categoryList } = productState;

  const rowSliderData = categoryList.map(({ categoryName, categoryImage }) => ({
    name: categoryName,
    img: categoryImage,
  }));

  const brandRowSliderData = brand.map(({ brandName, brandImage }) => ({
    name: brandName,
    img: brandImage,
  }));

  return (
    <div>
      <Carousel data={carouselData} height="90vh" width="100vw" />
      {categoryList?.length > 0 && (
        <RowSlider title="Category" data={rowSliderData} card={true} />
      )}
      {brand?.length > 0 && (
        <RowSlider title="Brand" data={brandRowSliderData} card={false} />
      )}
    </div>
  );
};

export default Home;

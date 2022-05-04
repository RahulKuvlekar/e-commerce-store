import "./Home.css";
import Carousel from "../../Components/UI/Carousel/Carousel";
import { carouselData } from "../../Components/UI/Carousel/carouselData";
import RowSlider from "../../Components/UI/RowSilder/RowSlider";
import { useProductContext } from "../../Hooks/useProductContext";

const Home = () => {
  const { productState } = useProductContext();
  const { categoryList } = productState;

  return (
    <div>
      <Carousel data={carouselData} height="90vh" width="100vw" />
      {categoryList?.length > 0 && (
        <RowSlider title="Category" data={categoryList} card={true} />
      )}
    </div>
  );
};

export default Home;

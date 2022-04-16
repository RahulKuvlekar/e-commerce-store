import { useState } from "react";
import "./Carousel.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Carousel = ({ data: imageData, height, width }) => {
  const [current, setCurrent] = useState(0);
  const dataLength = imageData.length;

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? dataLength - 1 : prev - 1));
  };
  const nextImage = () => {
    setCurrent((prev) => (prev === dataLength - 1 ? 0 : prev + 1));
  };

  const moveImage = (idx) => setCurrent(idx);

  if (!Array.isArray(imageData) || dataLength < 0) return null;

  return (
    <div className="carousel">
      {imageData &&
        imageData
          .filter((data, idx) => current === idx)
          .map((data, idx) => (
            <div
              key={`${idx}-carousel-data`}
              className="carousel-container"
              style={{ height, width }}
            >
              <div className="overlay-container">
                <h1>CLEARANCE SALE</h1>
                <h3>UPTO 70% OFF on various products</h3>
                <Link to="/products" className="btn btn-primary btn-overlay">
                  Shop Now
                </Link>
              </div>
              <img
                src={data.image}
                alt="carousals"
                className="img-responsive"
              />

              <FaAngleLeft className="carousel-leftArrow" onClick={prevImage} />
              <FaAngleRight
                className="carousel-rightArrow"
                onClick={nextImage}
              />
              <div className="container-dots">
                {Array.from({ length: dataLength }).map((item, index) => (
                  <div
                    onClick={() => moveImage(index)}
                    key={`${index}-carousel-dots`}
                    className={current === index ? "dot active" : "dot"}
                  ></div>
                ))}
              </div>
            </div>
          ))}
    </div>
  );
};

export default Carousel;

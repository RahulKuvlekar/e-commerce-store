import { useEffect } from "react";
import "./RowSlider.css";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../../Hooks/useProductContext";
import { filterTypes } from "../../../Constants/constants";

const RowSlider = ({ title, data, card }) => {
  const { dispatchProduct } = useProductContext();
  const navigate = useNavigate();
  const { SORT_BY_CATEGORY, SORT_BY_BRAND, CLEAR_FILTERS } = filterTypes;

  const getType = (title) => {
    if (title.toLowerCase() === "category") return SORT_BY_CATEGORY;
    else if (title.toLowerCase() === "brand") return SORT_BY_BRAND;
  };

  const cardHandler = (data) => {
    dispatchProduct({
      type: getType(title),
      payload: data,
    });

    navigate("/products");
  };

  useEffect(() => {
    dispatchProduct({
      type: CLEAR_FILTERS,
      payload: data,
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className={`row-slider ${card && "card-slider"}`}>
      <h1 className="row-slider-heading">{title}</h1>
      <ul className="row-slider-container">
        {data &&
          data.map(({ name, img }) => (
            <div
              key={`${name}-Row-Slider`}
              className="row-slider-wrapper"
              onClick={() => cardHandler(name)}
            >
              <img src={img} alt="" className="row-slider-img" />
              {card && <h1 className="row-slider-title">{name}</h1>}
            </div>
          ))}
      </ul>
    </div>
  );
};

export default RowSlider;

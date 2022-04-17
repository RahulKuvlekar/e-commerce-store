import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Topwear",
    categoryImage:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1700830/2019/4/8/3f06fe25-1ce2-4e1e-88e9-7a9d26b4f0bf1554699735416-WROGN-Men-Rust-Red-High-Density-Print-Round-Neck-T-shirt-961-1.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Bottomwear",
    categoryImage:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1320929/2019/5/31/bd91806e-374d-47df-b231-c296643dd2841559282905641-WROGN-Men-Black-Slim-Fit-Mid-Rise-Jeans-7121559282904321-1.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Shoes",
    categoryImage:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11097160/2021/9/2/fcd672b3-9b7d-4bc2-974a-4d588a83b88c1630579627596HIGHLANDERMenWhiteSneakers1.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Accessories",
    categoryImage:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/6972916/2021/5/11/c2e0a663-c4a0-47b0-8bee-b975450367221620724304341-Fossil-NATE-Men-Black-Analogue-Watch-JR1353-2771620724303669-1.jpg",
  },
];

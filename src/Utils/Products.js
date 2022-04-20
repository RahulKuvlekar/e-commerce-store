export const getDiscountedPrice = (price, percentage) =>
  ((price * (100 - percentage)) / 100).toFixed(2);

export const sortByPrice = (productList, price) => {
  if (price?.toUpperCase() === "HIGH TO LOW") {
    return [...productList].sort(
      (a, b) => b.discountedPrice - a.discountedPrice
    );
  } else if (price?.toUpperCase() === "LOW TO HIGH") {
    return [...productList].sort(
      (a, b) => a.discountedPrice - b.discountedPrice
    );
  }
  return productList;
};

export const sortByRating = (productList, rating) =>
  rating !== null
    ? productList?.filter((product) => product.rating >= rating)
    : productList;

export const sortByCategory = (productList, category) =>
  category.length > 0
    ? productList.filter((product) => category.includes(product.category))
    : productList;

export const sortByBrand = (productList, brand) =>
  brand.length > 0
    ? productList.filter((product) => brand.includes(product.brand))
    : productList;

export const sortbyFastDelivery = (productList, fastDelivery) =>
  fastDelivery === true
    ? productList?.filter((product) => product.fastDelivery === true)
    : productList;

export const includeOutOfStock = (productList, outOfStock) =>
  outOfStock === true
    ? productList
    : productList?.filter((product) => product.inStock === true);

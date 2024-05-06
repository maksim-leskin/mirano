import { fetchProducts } from "./API";
import { ProductCard } from "./ProductCard";

export const renderProducts = async () => {
  const goodsList = document.querySelector(".goods__list");
  const products = await fetchProducts();

  goodsList.innerHTML = "";

  products.forEach((product) => {
    const productCard = ProductCard(product);
    goodsList.append(productCard);
  });
};

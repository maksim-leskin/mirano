export const API_URL = "http://localhost:3000";

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/api/products`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const products = response.json();

    return products;
  } catch (error) {
    console.error(`Ошибка при получении данных: ${error}`);
    return [];
  }
};

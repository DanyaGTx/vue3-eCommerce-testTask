import { apiRoot } from "./instance.js";
import products from "./services/products.js";

const api = {
  products: products(apiRoot),
};
export { api };

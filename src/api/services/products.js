export default (api) => ({
  getProducts: (limit) => api.get(`/products?limit=${limit}`),
});

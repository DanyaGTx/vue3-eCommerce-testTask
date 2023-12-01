import { createStore } from "vuex";

export default createStore({
  state: {
    products: {
      limitPerPage: 10,
      data: [],
    },
  },

  getters: {
    getProducts(state) {
      return state.products.data;
    },
    getLimitPerPage(state) {
      return state.products.limitPerPage;
    },
  },

  mutations: {
    setProducts(state, payload) {
      state.products.data = payload;
    },
    setLimitPerPage(state, payload) {
      state.products.limitPerPage = payload;
    },
  },
});

const products = {
  namespaced: true,
  state: () => {
    return {
      products: [
        { id: 1, name: 'Airpods PRO 2nd generation', price: 800000 },
        { id: 2, name: 'Airpods PRO 1st generation', price: 650000 },
        { id: 3, name: 'Airpods 3rd generation', price: 700000 },
        { id: 4, name: 'Airpods 2nd generation', price: 500000 },
      ],
    };
  },
  getters: {
    totalProductsCount(state) {
      return state.products.length;
    },
    totalPrice(state) {
      return state.products.reduce((acc, product) => acc + product.price, 0);
    },
  },
  mutations: {},
  actions: {},
};

export default products;

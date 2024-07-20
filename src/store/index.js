import { createStore } from 'vuex';
import products from './modules/products';

const store = createStore({
  state: () => {
    return { count: 0, is_open_nav_bar: false };

  },
  getters: {},
  mutations: {
    increment(state, payload) {
      state.count += payload;
    },
    toggle(state, payload) {
      state.is_open_nav_bar = !state.is_open_nav_bar;
    },
  },
  actions: {
    increment(context, payload) {
      context.commit('increment', payload ? payload : 1);
    },
    toggle(context) {
      context.commit('toggle');
    },
  },
  modules: {
    productsModule: products,
  },
});

export default store;

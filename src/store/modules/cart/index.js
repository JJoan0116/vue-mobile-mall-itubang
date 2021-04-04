import { ADD_CART_LIST_SUCCESS } from '../../mutationType';
// Vue.use(Vuex);
/**
 * cartList: {
 *  [id]: {
 *    item: object,
 *    count: number
 *  }
 * }
 */
const state = {
  cartList: {}
};

const actions = {};

const getters = {
  // cartList(state) {
  //   return state.cartList;
  // },
  // cartCount(state, getters) {
  //   return getters.cartList.length;
  // },
  // cartCount(state) {
  //   return state.cartList.length;
  // }
};

const mutations = {
  [ADD_CART_LIST_SUCCESS](state, payload) {
    const { id } = payload.item;
    const { item } = state.cartList[id] || {};

    if (item) {
      state.cartList[id].count += payload.count;
    } else {
      state.cartList[id] = {
        item: payload.item,
        count: payload.count
      };
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations, // react中的reducer，负责处理函数的改变。用store.commit（'name', payload）去触发
  actions, // 可以包含异步操作，提交mutation。increment (context) { context.commit('name')}。用dispatch去分发store.dispatch('increment')
  getters // react中的selector，Vue中的computed
};

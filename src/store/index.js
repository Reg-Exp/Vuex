import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
//全局状态，可简单理解为数据
const state = {
  index:500,
};
//vuex  state中的状态必须通过mutations事件来改变
const mutations = {
  setIndex(state,payload){
    state.index += payload.count;
  }
};
//类似于组件中的计算属性，可根据需要对state中的数据进行二次处理
const getters = {
  countIndex:(state)=>{
    return state.index + 3;
  }
};
//mutation只支持同步执行，如果需要异步处理，则必须使用Actions
const actions = {
  syncIndex({commit},payload){
    setTimeout(()=>{
      commit('setIndex',payload);
    },2000);

  }
};
const modules = {

};
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules,
});

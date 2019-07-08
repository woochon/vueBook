import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import user from './module/user'
import permission from './module/permission'
import { saveInLocal } from "./plugin/saveInLocal";

Vue.use(Vuex);

export default new Vuex.Store({
  strict:process.env.NODE_ENV ==='development',
  state,
  getters,
  mutations,
  actions,
  modules:{
    user,
    permission
  },
  // plugins:[saveInLocal]
});

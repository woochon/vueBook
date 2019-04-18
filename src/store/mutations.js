import vue from 'vue';
const mutations = {
  SET_APP_NAME(state,params){
    state.appName += params;
    console.log(state.appName);
  },
  SET_APP_NAME_BY_ACTION(state,params){
    // state.appName = params;
    vue.set(state,'appName',params);
  }
};
export default mutations

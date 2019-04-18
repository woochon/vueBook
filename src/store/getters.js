const getters = {
  new_APP_NAME_Letter(state){
    console.log('getters',state.appName);
    return state.appName.substr(-1,1);
  }
};
export default getters

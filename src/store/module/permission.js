import { routes,routeMaps } from '../../router/routes'
const state ={
  routers:routes,
  hasGetRules:false
};
const mutations = {
  concat_routes_1(state,routerList){
    state.routers = routerList.concat(routes);
    state.hasGetRouters = true;
  }
};

const getAccessRouterList=function(routes,rules){
  return routes.filter(item=>{
    if(rules[item.name]){
      if(item.children){
        item.children = getAccessRouterList(item.children,rules);
      }
      return true
    }else{
      return false
    }
  })
};

const actions = {
  concat_routes({commit},rules){
    console.log('1234');
    return new Promise((resolve,reject)=>{
      try{
        let routeList = [];
        if(Object.entries(rules).every(item=>item[1])){
          routeList =routeMaps;
        }else{
          routeList = getAccessRouterList(routeMaps,rules);
        }
        console.log(state.routers,'======');
        commit('concat_routes_1',routeList );
        resolve(state.routers);
        console.log(state.routers,'++++++');
      }catch(err){
        reject(err);
      }
    })
  }
};

export default{
  state,
  mutations,
  actions
}

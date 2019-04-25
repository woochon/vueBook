import { routes,routeMaps } from '../../router/routes'
const state ={
  routers:routes,
  hasGetRouters:false
};
const mutations = {
  concat_routes(state,routerList){
    state.routers = routerList.concat(routes);
    state.hasGetRouters = true;
  }
};

const getAccessRouterList=function(routeMaps,routers){
  return routes.filter(item=>{
    if(rules[item.name]){
      if(item.children){
        item.children = getAccessRouterList(item.children,routers);
        return true
      }
    }else{
      return false
    }
  })
};

const actions = {
  getPermissionList({commit},routers){
    return new Promise((resolve,reject)=>{
      try{
        let routeList = [];
        if(Object.enters(routers).every(item=>item[1])){
          routeList =routeMaps;
        }else{
          routeList = getAccessRouterList(routeMaps,routers);
        }
        commit('concat_routes',routeList );
        resolve(state.routers);
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

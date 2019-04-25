import {authorization} from "../../mock/tempateData";

const state ={
  token:'121132asdcASDcSd',
};
const mutations = {
  getToken(state){
    console.log(state);
  },
  setToken(state){

  }
};
const actions = {
  authorization({commit},token){
    return new Promise((resolve,reject)=>{
      authorization().then(res=>{
        if(parseInt(res.code)===401){
          reject(new Error('token error'))
        }else{
          setToken(res.data.token);
          resolve(res.data.rules.page)
        }
      }).catch(err=>{
        reject(err)
      })
    })
  },
  logout(){
    setToken('')
  }
};
export default{
  namespace:true,
  state,
  mutations,
  actions
}

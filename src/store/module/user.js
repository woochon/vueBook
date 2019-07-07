import {authorization} from "../../mock/tempateData";
import {login} from "../../api/user";

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
  // mock
  /*authorization({commit},token){
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
  },*/
  logout(){
    setToken('')
  },
  login({commit},{userName,password}){
    login({userName,password}).then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err)
    })
  }
};
export default{
  namespace:true,
  state,
  mutations,
  actions
}

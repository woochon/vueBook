import {login,getAuthorization} from '../../api/user.js'
import {setToken,getToken} from "../../lib/util";

const state ={
  token:'121132asdcASDcSd',
  rules:{}
};
const mutations = {
  setRules(state,playload){
    console.log(playload);
    state.rules=playload;
  }
};
const actions = {
  // mock
  authorization({commit},token){
    console.log('00000');
    return new Promise((resolve,reject)=>{
      console.log('11111');
      getAuthorization('token').then(res=>{
        console.log('123',res);
        if(parseInt(res.code)===401){
          reject(new Error('token error'))
        }else{
          console.log(res.data.token,'===');
          setToken(res.data.token);
          console.log('000000' );
          resolve(res.data.page);
          commit('setRules',res.data.component);
        }
      }).catch(err=>{
        reject(err)
      })
    })
  },
  layout(){
    setToken('');
    console.log('1234');
  },
  login({commit},{userName,password}){
    return new Promise((resolve, reject)=>{
      console.log('33333');
      login({userName,password}).then(res=>{
        console.log(res);
        if(res.code===200){
          console.log(res.data.token,'6666');
          setToken(res.data.token);
          resolve();
        }else{
          console.log('获取token失败');
          reject(new Error('错误'));
        }
      }).catch(err=>{
        console.log(err);
        reject();
      })
    })
  }
};
export default{
  namespace:true,
  state,
  mutations,
  actions
}

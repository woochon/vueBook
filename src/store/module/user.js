//import {getAuthorization,login} from "../../mock/tempateData";
import {login,getAuthorization} from '../../api/user.js'
import {setToken,getToken} from "../../lib/util";

const state ={
  token:'121132asdcASDcSd',
};
const mutations = {

};
const actions = {
  // mock
  authorization({commit},token){
    return new Promise((resolve,reject)=>{
      getAuthorization().then(res=>{
        if(parseInt(res.code)===401){
          reject(new Error('token error'))
        }else{
          setToken(res.data.data.token);
          resolve(res.data.data.token);
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
      login({userName,password}).then(res=>{
        console.log(res);
        if(res.code===200){
          console.log(res.data.token,'6666');
          setToken(res.data.token);
          resolve(res.data.token);
        }else{
          console.log('获取token失败');
          reject();
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

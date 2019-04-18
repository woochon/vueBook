import { getAppName } from '../api/app';
const actions ={
  /* promise方式 */
  updateAppName({commit},payload){
    //console.log(commit,payload);
    getAppName(payload).then(res=>{
      console.log(res);
      /*let {name} = res.info;*/
      commit('SET_APP_NAME_BY_ACTION',res.info.appName);
    }).catch(err=>{
      console.log(err);
    })
  }
  /* async和await方式 */
  /*async updateAppName(){
    try {
      const data = await getAppName();
      console.log(data);
    }catch (e) {
      console.log(e)
    }
  }*/
};
export default actions;

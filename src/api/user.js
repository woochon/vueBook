import axios from './index'
const BaserUrl = 'http://localhost:3000';
export const getUserInfo =()=>{
  return axios.request({
    url:`${BaserUrl}/userInfo`,
    method:'post',
    data:{
      userId:1001
    }
  })
};

export const login =({userName,password})=>{
  return axios.request({
    url:'/login',
    method:'post',
    data:{
      userName,
      password
    }
  })
};

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
  console.log('111111');
  return axios.request({
    url:`${BaserUrl}/login`,
    method:'post',
    data:{
      userName,
      password
    }
  })
};


export const getAuthorization=(token)=>{
  console.log('22222');
  return axios.request({
    url:`${BaserUrl}/authorization`,
    method:'post',
    data:{
      token
    }
  })};

import Cookies from 'js-cookie';
export const setTitle=(title)=>{
  window.document.title=title||'undefined'
};

export const setToken = (token,tokenName='token')=>{

  Cookies.set(tokenName,token);
  Cookies.get(tokenName,'====')
};
export const getToken =(tokenName='token')=>{
  //console.log(Cookies.get(tokenName));
  return Cookies.get(tokenName)
};

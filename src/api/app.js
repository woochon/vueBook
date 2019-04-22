export function getAppName(appName){
  return new Promise((resolve,reject)=>{
    let err = null;
    setTimeout(()=>{
      if(!err){
        resolve({code:200,info:{appName:appName+'===='}});
      }else{
        reject(err);
      }
    },80);
  })
}

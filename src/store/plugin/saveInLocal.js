export function saveInLocal(store){
  console.log('store初始化的时候触发');
  if(localStorage.state) store.replaceState(JSON.parse(localStorage.state));
  store.subscribe((mutation,state)=>{
    console.log('提交mutations触发');
    localStorage.state = JSON.stringify(state);
  });
}

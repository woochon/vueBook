const mongoose = require('mongoose');
module.exports =async (db) =>{
  let maxConnectTimes =0;
  /*if(process.env.NODE_ENV !=='production'){
      mongoose.set('debug',true);
  }*/
  mongoose.connect(db,{ useNewUrlParser: true });
  mongoose.connection.on('disconnect',()=>{
    maxConnectTimes +=1;
    if(maxConnectTimes<5){
      mongoose.connect(db,{ useNewUrlParser: true });
    }else{
      throw new Error('数据库挂了吧少年');
    }
  });
  mongoose.connection.on('error',(err)=>{
    maxConnectTimes +=1;
    if(maxConnectTimes<5){
      mongoose.connect(db,{ useNewUrlParser: true });
    }else{
      throw new Error('数据库挂了吧');
    }
  });
  mongoose.connection.on('open',()=>{
    console.log('mongodb connected');
  });
};

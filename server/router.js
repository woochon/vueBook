const router = require('koa-router')();
const uploadController = require('./controller/upload');


module.exports = (app)=>{
    console.log('asdf');
    router.get('/',uploadController.index);


// 调用路由中间件
    app.use(router.routes()).use(router.allowedMethods());
};

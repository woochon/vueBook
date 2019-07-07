const router = require('koa-router')();
const uploadController = require('./controller/upload');
const loginController = require('./controller/login');


module.exports = (app)=>{
    console.log('asdf');
    router.get('/',uploadController.index);

    router.post('/login',loginController.login);
    router.post('/authorization',loginController.authorization);


// 调用路由中间件
    app.use(router.routes()).use(router.allowedMethods());
};

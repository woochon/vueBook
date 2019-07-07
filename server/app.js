const Koa = require('koa');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const jwt = require('jsonwebtoken');
//const verify = util.promisify(jwt.verify); // 解密
const nunjucks = require('koa-nunjucks-2');
const staticFiles = require('koa-static');
const db_connect = require('./database/index');
const router = require('./router');
const middleware = require('./middleware');
const jwtKoa = require('koa-jwt');

const hasOneOf =(str,arr)=>{
  return arr.some(item=>item.includes(str));
};
const whiteListUrl = {
  get:[],
  post:['/login']
};

(async ()=>{
  await db_connect('mongodb://127.0.0.1:27017/woochon',function(){
    const app = new Koa();
    middleware(app);
// 指定 public目录为静态资源目录，用来存放 js css images 等
    app.use(staticFiles(path.resolve(__dirname, "./public")));
    app.use(nunjucks({
      ext: 'html',
      path: path.join(__dirname, 'views'),// 指定视图目录
      nunjucksConfig: {
        trimBlocks: true // 开启转义 防Xss
      }
    }));

<<<<<<< HEAD
  app.use(bodyParser());

  app.use((ctx,next)=>{
    let method = ctx.req.method.toLowerCase();
    let path = ctx.req.path;
    if(whiteListUrl[method]&&hasOneOf(path,whiteListUrl[method])){
      next();
    }
    else{
      const token = ctx.header.authorization;  // 获取jwt
      let payload;
      if(!token){
        ctx.response.status=401;
        ctx.send({
          code:401,
          msg:'no token',
          data:null
        })
      }else{
        jwt.verify(token,'abcd',(error,decode)=>{
          if(error){
            ctx.response.send({
              code:401,
              msg:'no token',
              data:null
            })
          }else{
            ctx.request.body.userName = decode.name;
            next();
          }
        });
        next();
      }
    }
  });

  app.use((ctx,next)=>{
    jwtKoa({secret:'abcd'}).unless({
      path:['/login']
    });
    next();
  });

  router(app);
  app.listen(3000, ()=>{
    console.log('server is running at http://localhost:3000')
=======
    app.use(bodyParser());
    router(app);
    app.listen(3000, ()=>{
      console.log('server is running at http://localhost:3000')
    });
>>>>>>> 9a0cf76b8a2580fe2c24c1a63c478da2602bcab2
  });
})();

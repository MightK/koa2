const Koa = require("koa");
const Router = require("koa-router");
const router = new Router({prefix:"/go"});//通过添加prefix属性给原来的url路由增加层级
const app = new Koa();


router.get("/", (ctx, next) => {
    ctx.body = "hello world"
}).get("/todo",(ctx,next)=>{
    ctx.body="这个是TODOpgae页面"
})
app
    .use(router.routes())
    .use(router.allowedMethods());
// app.use(async ()=>{ })
app.listen("3000", () => {
    console.log("这个是01router中间件的运行服务");
})
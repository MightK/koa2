const Koa = require("koa");
const Router = require("koa-router");
const router = new Router();
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
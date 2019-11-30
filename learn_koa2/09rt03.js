const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
//子路由ST
let home = new Router();
home.get("/going", async(ctx) => {
    ctx.body = "Home Router page"
}).get("/todo", async() => {
    ctx.body = "Home todo page "
});

let page = new Router();
page.get("/going", async(ctx) => {
    ctx.body = "Page Router page"
}).get("/todo", async() => {
    ctx.body = "Page todo page "
});
//子路由END 父路由
let router = new Router();
router.use("/home", home.routes(), home.allowedMethods());
router.use("/page", page.routes(), page.allowedMethods());
//把子路由装载进去
app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen("3000", () => {
    console.log("这个是01router中间件的运行服务");
})

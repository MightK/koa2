const Koa=require("koa");
const app=new Koa();

app.use(async (ctx)=>{
    ctx.body="hello world"
})
app.listen(3030);
console.log("app is starting at port 3030");
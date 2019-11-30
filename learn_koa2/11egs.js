const Koa=require("koa");

const views=require("koa-views");

const path=require("path");//node原生的东西
const app=new Koa();

app.use(views(path.join(__dirname,"./view"),{
    extension:"ejs"
}));//当前项目的路径根目录

app.use(async (ctx)=>{
    let title="hello welcom to NBA";
    await ctx.render("index",{title})
})

app.listen("3000",()=>{
    console.log("egg server is running");
});
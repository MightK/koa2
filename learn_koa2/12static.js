const Koa=require("koa");
const path=require("path");
const static=require("koa-static");

const app=new Koa();

const staticPath="./static";

app.use(static(path.join(__dirname,staticPath)));

app.use(async (ctx)=>{
    ctx.body="happy ending"
});

app.listen("3000",()=>{
    console.log("恭喜呀少年郎，koa2的基础课程结束了︿(￣︶￣)︿");
});
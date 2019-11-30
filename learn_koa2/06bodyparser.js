const Koa=require("koa");
const app=new Koa();
const bodyparser=require("koa-bodyparser");

app.use(bodyparser());
app.use(async(ctx)=>{
    if(ctx.url==="/" && ctx.method==="GET" ){
        let html=`
        <h3>koa2的学习之路</h3>
        <form method="POST" action="/">
            <p>userName</p>
            <input name="username"/>
            <p>Age</p>
            <input name="age"/>
            <P>Website</P>
            <input name="website"/>
            <button type="submit"> 提交 </button>
        </form>
        `
        ctx.body=html;
    }else if(ctx.url==="/" && ctx.method==="POST"){
        //使用这个bodyparser中间件的用处就是将接收到的postdata放到ctx.request.body中
        let posdatas=ctx.request.body;
        ctx.body=posdatas;
    }else{
        ctx.body="404 page not found~！"
    }
})


app.listen(3050,()=>{
    console.log('[demo] server is starting at port 3050');
})
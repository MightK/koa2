const Koa=require("koa");
const app=new Koa();
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
        let pastData= await parsePostData(ctx);
            ctx.body=pastData
        // ctx.body="看清自己，认识世界，变强吧~！"
    }else{
        ctx.body="404 page not found~！"
    }
})
function parsePostData(ctx){
    return new Promise((resolve,reject)=>{
        try{
            let postdata="";
            //如果接收到了数据就将数据放进postdata中（可能与多个所以用+=）
            ctx.req.on("data",(data)=>{
                postdata+=data
            });
            //监听完成的时候，将通过resolve将postdata返回去
            ctx.req.addListener("end",function(){
                console.log(postdata);
                let parseDatas=parseQueryStr(postdata);
                resolve(parseDatas);
            })
        }catch(error){
            reject(error);
        }
    })
}
function parseQueryStr(queryStr){
    let queryDate={};
    let dataList=queryStr.split("&");
    console.log(dataList);
    console.log(dataList.entries());
        //遍历每一个小的数组里的内容
    for(let[index,queryStr] of dataList.entries()){
        let listItem=queryStr.split("=");
        console.log(index);
        console.log(listItem);
        queryDate[listItem[0]]=decodeURIComponent(listItem[1]);
    }
    return queryDate;
}

app.listen(3040,()=>{
    console.log('[demo] server is starting at port 3040');
})
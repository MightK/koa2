
async function go(){
    return "想回到过去"
}
async function leave(){
    return "逝去的人不会走远"
}
async function test(){
    const one=await go();
    const two=await leave();
    console.log(one,two);
}
test();


function getIt(){
   return new Promise(resolve=>{
       setTimeout(()=>{resolve("这个是鳄鱼么？"),3000})
   })
}

async function gotthis(){
    const n=await getIt();
    console.log(n);
};
gotthis();
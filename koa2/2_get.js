const Koa=require('koa');
const app=new Koa();

app.use(async ctx =>{
    let url=ctx.url;
    let query=ctx.query;
    let queryString=ctx.queryString;

    ctx.body={ //在页面里输出,必须要写这个部分
        url,
        query,
        queryString,
    };
});
 app.listen(3000,()=>{
     console.log('服务成功开启在3000端口');
 });
const http=require('http');
const url=require('url');
// favion.ico 客户端请求服务器的地址
// request 获取url传过来的信息
// response 给客户端相应的信息

http.createServer((req,res)=>{
    // console.log(req.url);
    // 获取得到的request和URL；
    res.writeHead(200,{'Content-type':"text/html;charset='utf-8'"});
    res.write("thisi is nodeJS");

    console.log(req.url);
    if(req.url!='/favicon.ico'){
        var userinfo=url.parse(req.url,true).query;
        console.log(userinfo);
        console.log('${userinfo.name}');
        console.log('姓名: ${userinfo.name}---年龄： ${ueerinfo.age}');
    }






    res.end("this is just we fight for beibei ");

    // end必须要有，否则一直在加载，处在假死的状态
}).listen(3000);

// 获取request中的具体的请求

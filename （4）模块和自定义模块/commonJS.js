//  commonJS是一个模块化的标准  而NODE.JS就是模块的实现
//  模块分为核心模块和文件模块
//  HTTP URL FS都是NODEJS内置的核心模块 而文件模块是我们自己需要填写的

// const http=require("http");
// const tools=require('./zijide.js');
// const obj=require("./request.js");

// console.log(obj);
// console.log(tools);
// const { format } = require("path");

// function formatApi(api){

//     return "www.baidu.com/"+api;

// }

//  req在前面，res在后面
// http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"});
//     res.write("jiang jiang");
//     res.write("nihao i am node js    ");
//     var api=tools.formatApi('jiangjiang/euuuut<br>');
//     res.write(api);
//     res.end();
// }).listen(3000);


// 我们想要引入node_modules中的模块

const get=require('./node_modules/index');

console.log(get);
get.get();
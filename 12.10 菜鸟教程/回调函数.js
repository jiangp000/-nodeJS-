// node.js 的异步编程的直接体现就是回调函数
// 异步编程依靠回调来进行实现，但是不能说使用了回调函数程序就异步化了


// var fs=require("fs");
// var data=fs.readFileSync("q.txt");
// console.log(data.toString());
// console.log("程序执行结束");


// 非阻塞代码的实例

var fs=require("fs");

fs.readFile("q.jtxt",function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束");

console.log("jiang jiang is not a great friend");

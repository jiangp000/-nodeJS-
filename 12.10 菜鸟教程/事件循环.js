// node.js 的所有的事件机制都是设计模式中的观察者模式来实现的
// 单线程中类似进入一个while（true)的事件循环，知道没有观察者会退出
// 每一个的异步时间都会生成一个事件观察者，如果有事件发生那么就调用该回调函数

// 在事件驱动的模型中，会生成一个主循环来监听事件，当检测到事件的时候就触发回调函数



// var events=require("events");

// var eventEmitter=new events.EventEmitter();

// // 下面我们可以绑定事件及其处理程序

// eventEmitter.on("eventName",eventHandler);

// // 我们可以通过程序来触发事件

// eventEmitter.emit("eventName");


// 实例
var events=require("events");
var eventEmitter=new  events.EventEmitter();

var connectHadnler= function connected(){
    console.log("connect successfully");
    eventEmitter.emit("data_received");
}

eventEmitter.on("connection",connectHadnler);

eventEmitter.on("connection",function(){
    console.log("yes successfully");
})

eventEmitter.emit("connection");
console.log("all finished successfully");

//  node 应用程序是如何工作的？
// 在node 应用程序中，执行异步操作的函数将回调函数作为最后一个参数。
// 回调函数接受错误的对象作为第一个参数，会有if then的判断。
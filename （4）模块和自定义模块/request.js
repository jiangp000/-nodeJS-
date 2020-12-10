// const { post } = require("request");

var boj={
    get:function(){
        console.log("从服务器获取数据");
    },

    post:function(){
        console.log("从客户端提交数据");
    }
}



exports.boj=boj;

// 如果把所有的东西都封装在一个对象中，那么我们可以使用modules来进行的导入
// 否则,我们需要一个一个的自己手写
module.exports=boj;
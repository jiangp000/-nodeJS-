//  g 执行全局的匹配，会将所有的文字都匹配完，不单单是第一个匹配就结束
//  m 执行多行的匹配
//  i 执行对大小不敏感的匹配

// search  返回对应的下表
// test    返回true 或者是false
var patt=/e/;
var result1=patt.test("the best is onl you","g");
console.log(result1);


// exec 返回存放的结果

// 正则表达式的regex不是字符串，直接用两个反斜杠开头和结尾
const x="18851751486";
var regex=/1[0-9]{10}/;

console.log(regex.test(x));

// if(regex.test(x)){
//     alert("正确的电话号码");
//     return false;
// }
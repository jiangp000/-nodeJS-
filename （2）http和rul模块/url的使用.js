const url =require('url')

var api='https://www.baidu.com/s?wd=nishizhen&rsv_spt=1&rsv_iqid=0xd32334a100044d63&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&rsv_sug3=12&rsv_sug1=12&rsv_sug7=101&rsv_sug2=0&rsv_btype=i&prefixsug=nishizhen&rsp=5&inputT=1880&rsv_sug4=2449';
console.log(url.parse(api));


var getValue=url.parse(api).query;
console.log(getValue)

// console.log("姓名"${getValue.name});
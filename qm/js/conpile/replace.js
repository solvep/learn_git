// var str = 'Visit Microsoft';
// console.log(str.replace('Microsoft','alibaba'));

// var money = '$sadlfjalk$sdjflakd$';

// console.log(money.replace(/\$/g,'@'));


let html = `
<view>
    <text>{{username}}<text>
<view>
`;

let reg = /\{\{(.*)\}\}/gm;
console.log(reg.test(html), RegExp.$1);
// console.log(html.replace(reg,'@'));
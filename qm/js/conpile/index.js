const html = `
<view>
    <text>{{username}}<text>
<view>
`;
let obj = {
    'username':'tangtang'
};

let username='tangtang';
// {{}}
// 在模板中,查找{{key}} 替换成 username 变量的值 replace

function compile(html){
    // console.log(username);
    let reg =/\{\{(.*)\}\}/gm
    if(reg.test(html)){
        let key = RegExp.$1
         return html.replace( reg ,obj[key]);
    }
    // console.log(reg.test(html), RegExp.$1);
    // return html;
}

const compileHTML = compile(html);
console.log(compileHTML);
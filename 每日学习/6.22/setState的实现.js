function type(elem) {
    if(elem == null) {
        return elem + '';
    }
    return toString.call(elem).replace(/[\[\]]/g, '').split(' ')[1].toLowerCase();
}
let state = {
    d:1
}
function setState(option,target){
    let o = target ? target : state;
    let keys = Object.keys(option);

    keys.map((item) =>{
        if(typeof o[item] === 'null'){
            o[item] = option[item];
        }else{
            type(o[item]) === 'object' ? setState(o[item]) : o[item] = option[item];
        }
        return item;
    })
}

setState({ a: 20 });     // 保存 属性a
setState({ b: 100 });    // 保存属性b
setState({ c: 10 });  
console.log(state)
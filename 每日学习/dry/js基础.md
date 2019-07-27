把一个字符串转化为整数：

function ParseInt(str){
    if(typeof str === 'string'){
       return parseInt(str,10)
    } else {
        return new Error('must type string')
    }
}
function NodeList(value){
    this.value = value;
    this.next = null;
}
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807


// 将链表点转化为string并逆转
function listToString(list){
    let str = '';
    while(list){
        str = str + list.value;
        list = list.next ? list.next:null;
    }
    return str.split('').reverse.join('');
}

//将string转化为链表
function stringToList(str){
    let arr = str.split('');
    let listNode = new NodeList(arr.shift());
    return arr.reduce((ori,cur)=>{
        let ln = new ListNode(cur)
        ln.next = ori
        return ln
    },listNode)
}

//两个字符串相加
function add(a,b){
    var res = '',c =0;
    a = a.split('');
    b = b.split('');
    while(a.length || b.length || c){
        c += a.pop() + b.pop();
        res += c % 10;
        c = c > 9;
    }
    return res;
}
var addTwoNumbers = function(l1, l2) {
    let sum = add(listToStr(l1),listToStr(l2))
    return strToList(sum)
}
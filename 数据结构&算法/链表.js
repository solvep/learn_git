function Node(value){
    this.value = value
    this.next = null
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)

node1.next = node2
node2.next = node3


// function printNode(node){
//     if(!node){
//         return;
//     } else {
//         console.log(node.value)
//         printNode(node.next)
//     }
// }
// printNode(node1)

// function getLength(node,len = 0){
//         if(!node){
//             return len
//         }
//         len += 1
//         return getLength(node.next,len)
// }
//  console.log(getLength(node1))

//  通过下标获取链表中的某个数据

// function getIndexNode(node, index,currentIndex = 0){
//     if(!node){
//         return;
//     }
//     if(currentIndex == index){
//         return node.value
//     } else {
//        return getIndexNode(node.next, index ,currentIndex+1)
//     }
// }
// function getIndexNode(node, index){
//     if(!node){
//         return;
//     }
//     let currentIndex = 0
//     function _getNode(node, index,currentIndex ){
//         if(currentIndex == index){
//             return node.value
//         } 
//     }
//     return _getNode(node.next, index ,currentIndex+1)
    
// }

// console.log(getIndexNode(node1,1))

// 通过下标设置链表中的某个数据 分治法

// function setLinkNode(node, index , value, currentIndex = 0){
//     if(!node){
//         return '超过链表长度'
//     }
//     if(index == currentIndex){
//         node.value = value
//         return 'success'
//     }
//     return setLinkNode(node.next, index,value, currentIndex + 1)
// }

// console.log(setLinkNode(node1,1,8),node1)

// 链表某一个节点之后加入一个新节点

// function addNewNode(node, index, newNode,currentIndex = 0){
//     if(!node){
//         return 'fail'
//     }
//     if(currentIndex == index){
//         newNode.next =  node.next
//         node.next = newNode
//         return 'success'
//     }
//     return addNewNode(node.next, index, newNode, currentIndex+1)
// }

// let node4 = new Node(9)
// console.log(addNewNode(node1,1,node4),node1)

// 在链表末尾加入一个新节点
// function addNode(node , newNode){
//     if(!node){
//         return 'fail'
//     }
//     if(node.next == null){
//         node.next = newNode
//         return 'success'
//     }
//     return addNode(node.next , newNode)
// }

// let node4 = new Node(9)
// console.log(addNode(node1,node4),node3.next)

// 删除一个链表节点

// function deleteNode(node, index, currentIndex=0){
//     if(!node){
//         return 'fail'
//     }

//     if(index == currentIndex){
//         node.next = node.next.next
//         node.next = null
//         return 'success'
//     }
//     return deleteNode(node.next,index,currentIndex+1)
// }
// console.log(deleteNode(node1,1),node1)

// 链表倒序

function reverseNode(node){
    if(!node){
        return 'fail'
    }
    node.next.next = node
    // node.next = 
}
// 已知一个搜索二叉树后序遍历的数组posArr，请根据posArr，重建出整棵树，返回新建树的头结点。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 function TreeNode(val, left, right) {
       this.value = (val===undefined ? 0 : val)
       this.left = (left===undefined ? null : left)
       this.right = (right===undefined ? null : right)
   }
/**
 * @param {number[]} posArr
 * @param {number} left
 * @param {number} right
 * @return {TreeNode}
 */
var postorderHead = function(posArr, l, r) {
  if(l > r) return null

  let head = new TreeNode(posArr[r])
  if(l == r) return head
  let m = l - 1
  let left = l
  let right = r - 1

  while(left <= right) { 

    let mid = parseInt(left + ((right - left) >> 1))
    if(posArr[mid] < posArr[r]) {
      m = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  head.left = postorderHead(posArr, l, m)
  head.right = postorderHead(posArr, m + 1, r - 1)
  return head
};

function pos(head, posList) {
  if(head != null) {
    pos(head.left, posList);
    pos(head.right, posList)
    posList.push(head.value)
  }
}

function getBSTPosArray(head) {
  let postList = []
  pos(head, postList)
  return postList
}

function generteRondomBST(min, max, n) {
  if(min > max) return null
  return createTree(min, max, 1, n)
}

function createTree(min, max, level, n) {
  if(min > max || level > n ) return null
  let head = new TreeNode(random(min, max))
  
  head.left = createTree(min, head.value - 1, level + 1, n)
  head.right = createTree(head.value + 1, max, level + 1, n)
  return head
}

function random(min, max) {
  return min + parseInt(Math.random() * (max - min + 1))
}


let head = generteRondomBST(0, 12, 4)
console.log('head', head)
let posArr = getBSTPosArray(head)
console.log('--',posArr, postorderHead(posArr, 0, posArr.length - 1))


let arr = [6, 9, 8, 11, 15, 12, 10]

// console.log('head', postorderHead(arr, 0, arr.length - 1))
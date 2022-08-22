/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// methode with array
// var head = [1,4,1];
// var isPalindrome = function(head) {
//   let resulte ;
//   for (let i = 0 ; i < head.length;i++){
//     if(head[i] !== head.reverse()[i]){
//       resulte = false
//       break;
//     }else resulte = true
//   }
//   return resulte
// };

// console.log(isPalindrome(head))
// Methode linkden list
var head = [2,2,1];
// class listNode {
//   constructor(val, next) {
//     this.val = (val === undefined ? 0 : val);
//     this.next = (next === undefined ? null : next);
//   }
// }

let fast = head;
if(!fast.next){
  console.log("kkk")
}
var isPalindrome = function(head){
  let slow = head;
  let fast = head;
  const stack =[];
  while(fast){
    if(!fast.next){
      slow = slow.next;
      break;
  }
    stack.push(slow.val);
    slow = slow.next;
    fast=fast.next.next;
  }
  while(slow){
    if(stack.pop() != slow.val) return false;
    slow = slow.next;
  }
  return true;
}
console.log(isPalindrome(head))
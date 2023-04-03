// Q1 -

// function fibonacci(num) {
//     if(num <= 1){
//         return num;
//     }
//   return fibonacci(num - 1) + fibonacci(num - 2);
// };
// console.log(fibonacci(60));



// Q2 -

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// function arrSum (arr, index){
//     if (index >= arr.length) {
//         return;
//     }
//     sum += arr[index];
//     arrSum(arr, index+1);
// }

// arrSum(arr, 0);
// console.log(sum);



// Q3 -

// function reverse(str){
  
//     if(str.length <= 1){
//         return str;
//     }
  
//     else {
        
//         return str.charAt(str.length - 1) + reverse(str.substring(0, str.length - 1));
//     }
// }
// console.log(reverse("saad"));







//Data Structures [Stack and Queue]
//Q1 -
// const stack = [];
// const minStack = [];

// function myPush(num){
//     stack.push(num);
//     if (minStack.length === 0 || num <= minStack[minStack.length - 1]) {
//         minStack.push(num);
//     }
// }
// function getMin(){
//     return minStack[minStack.length - 1];
// }

// myPush(1);
// myPush(2);
// myPush(3);
// myPush(4);
// myPush(5);
// console.log(getMin());


//Q2 -
// function reverseQueue(queue) {
//     const stack = [];
    
//     while (queue.length > 0) {
//       stack.push(queue.shift());
//     }
  
//     while (stack.length > 0) {
//       queue.push(stack.pop());
//     }
  
//     return queue;
//   }
  
//   const queue = [10, 20, 30, 40, 50];
//   console.log(reverseQueue(queue));



//Q3 -
// class Queue {
//     constructor() {
//       this.s1 = [];
//       this.s2 = [];
//     }
  
//     enqueue(item) {
//       this.s1.push(item);
//     }
  
//     dequeue() {
//       if (this.s1.length === 0 && this.s2.length === 0) {
//         return undefined;
//       }
  
//       if (this.s2.length === 0) {
//         while (this.s1.length > 0) {
//           this.s2.push(this.s1.pop());
//         }
//       }
//       return this.s2.pop();
//     }
  
//     peek() {
//       if (this.s1.length === 0 && this.s2.length === 0) {
//         return undefined;
//       }
  
//       if (this.s2.length === 0) {
//         return this.s1[0];
//       }
//       return this.s2[this.s2.length - 1];
//     }
  
//     isEmpty() {
//       return this.s1.length === 0 && this.s2.length === 0;
//     }
  
//     size() {
//       return this.s1.length + this.s2.length;
//     }
//   }
  
//   const myQueue = new Queue();
//   myQueue.enqueue(1);
//   myQueue.enqueue(2);
//   myQueue.enqueue(3);
//   console.log(myQueue);
//   console.log(myQueue.peek());
//   console.log(myQueue.size());
//   console.log(myQueue.isEmpty());


//Data Structures [Stack and Queue]
//Q1 + Q2
// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }
  
//   class LinkedList {
//     constructor(head = null) {
//       this.head = head;
//       this.tail = null;
//       this.length = 0;
//     }
  
//     appendNode(newNode) {
//       let node = this.head;
//       if (node == null) {
//         this.head = newNode;
//         this.length++;
//         return;
//       }
//       while (node.next) {
//         node = node.next;
//       }
//       node.next = newNode;
//       this.length++;
//     }
  
//     getFirst() {
//       return this.head.data;
//     }
    
    
  
//   }
  
//   function getNode(list, index){
//         if(index < 0 || index > list.length){
//             return null;
//         }
//         else{
//             let currentNode = list.head;
//             for(let i = 1; i <= index - 1; i++){
//                 currentNode = currentNode.next;
//             }
//             return currentNode.data;
//         }
//     }
    
//     function removeMiddleNode(list) {
//         let index = Math.round(list.length/2);
//         let current = list.head;
//         for(let i = 0; i < index; i++){
//             current = current.next;
//         }
//         list.length--;
//         return current.data;
//   }
  
//     function reverseList(list) {
//     let prev = null;
//     let current = list.head;
  
//     while (current !== null) {
//       let next = current.next;
//       current.next = prev;
//       prev = current;
//       current = next;
//     }
  
//     list.head = prev;
//     return list;
//   }
//   function printList(list){
//       let arr = [];
//       let current = list.head;
//       for(let i = 0; i < list.length; i++){
//           arr.push(current.data);
//           current = current.next;
//       }
//       return arr;
//   }
  
  
//   const list = new LinkedList();
  
//   const n1 = new Node("first");
//   const n2 = new Node("second");
//   const n3 = new Node("third");
  
//   list.appendNode(n1);
//   list.appendNode(n2);
//   list.appendNode(n3);
  
  
//   console.log(removeMiddleNode(list));
//   console.log(printList(list));
//   console.log(printList(reverseList(list)));

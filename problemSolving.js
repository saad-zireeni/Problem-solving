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







//Data Structures
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


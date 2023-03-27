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
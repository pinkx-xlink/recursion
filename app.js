#!/usr/bin/env node

// fibonacci using iteration

// take in a number x
function fibs(x) {
    let a = 0;
    let b = 1;
    let c;
    let i = 2;
    // run the fibonacci x times
    while (i < x) {
        c = a + b;
        a = b;
        b = c;
        i++;
    }
    // return the result of the fib sequence after x iterations
}
x = 8;
console.log(x);
// console.log(fibs(8));

// function recursiveFib() {
//     if(x < 2) {
//         return 1
//     } else {
//     }
// }
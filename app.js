#!/usr/bin/env node
// RUN THIS CODE IN NODE.JS
// fibonacci using iteration
// take in a number x
function fibs(d) {
    let a = 0;
    let b = 1;
    let c;
    let i = 2;
    // run the fibonacci x times
    while (i < d) {
        c = a + b;
        a = b;
        b = c;
        i++;
        console.log(b)
    }
    console.log(`Rounds of fibonacci sequence executed: ${d} times`);
    return b;
    // return the result of the fib sequence after x iterations
}
fibs(8);

function recursiveFib(num) {
    let x = 0;
    let y = 1;
    let z;
    // let j = 2;
    if(num < 2) {
        return 1
    } else {
        z = x + y;
        
        // x = y;
        // y = z;
        // j++;
        recursiveFib(num = (x + 1) + (y + 1));
        console.log(z);
        // j++;
    }
    console.log(`Resursive fibonacci sequence executed: ${num} times.`);
}
recursiveFib(9);


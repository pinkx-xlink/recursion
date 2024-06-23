#!/usr/bin/env node
// RUN THIS CODE IN NODE.JS
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
        console.log(b)
    }
    console.log(`Rounds of fibonacci sequence executed: ${x}`);
    return b;
    // return the result of the fib sequence after x iterations
}
fibs(8);

function recursiveFib(num) {
    if(num < 2) {
        return 1
    } else {
        console.log('skjbdfkj')
    }
}
recursiveFib(8);


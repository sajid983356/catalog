function fibRecursive(n) {
    console.log(`Calculating fib(${n})`);

    if (n <= 1) {
        console.log(`Base case: fib(${n}) = ${n}`);
        return n;
    } else {
        console.log(`Calculating fib(${n - 1}) + fib(${n - 2})`);
        return fibRecursive(n - 1) + fibRecursive(n - 2);
    }
}

// Example usage:
let resultRecursive = fibRecursive(3);
console.log(`Result: fib(3) = ${resultRecursive}`);

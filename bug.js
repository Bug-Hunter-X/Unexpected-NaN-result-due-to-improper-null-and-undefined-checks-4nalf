function foo(a, b) {
  if (a === null || b === null) {
    return 0; //Incorrect: Should handle undefined
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 0
console.log(foo(undefined, 2)); //NaN, should be 0
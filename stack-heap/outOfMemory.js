// heap out of memory example

const list = [];
for (let i = 0; i < 1000000000000000; i++) {
  list.push(i);
}

// stack overflow example

// function foo() {
//   foo();
// }

// foo(); // Uncaught RangeError: Maximum call stack size exceeded
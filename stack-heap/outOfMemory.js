const arr = [];
try {
  while (true) {
    arr.push(new Array(1000000));
  }
} catch (error) {
  console.error("Heap memory error occurred:", error);
}
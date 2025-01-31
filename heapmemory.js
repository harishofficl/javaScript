function checkHeap() {
  const usedHeapSize = window.performance.memory.usedJSHeapSize;
  const totalJSHeapSize = window.performance.memory.jsHeapSizeLimit;
  const totalHeapSize = window.performance.memory.totalJSHeapSize;
  console.log(`used: ${usedHeapSize}`);
  console.log(`total: ${totalHeapSize}`);
  console.log(`totalJS: ${totalJSHeapSize}`);


  const percentage = (usedHeapSize / totalJSHeapSize) * 100;
  console.log(percentage);
  return percentage;
}

checkHeap();
const arr = [];
try {

  while (true) {
    arr.push(new Array(1000000));
    if (checkHeap() > 95) {
      throw new Error("Heap out of memory potential detected");
    }
  }
} catch (error) {
  console.log(error.message);
  swal({
    icon: "warning",
    title: "Oops...",
    text: "Heap out of memory potential detected!",
  });
}

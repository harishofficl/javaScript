Array.prototype.frequency = function () {
  const freqMap = new Map();
  this.forEach((element) => {
    if (freqMap.get(element) === undefined) {
      freqMap.set(element, 1);
    } else {
      freqMap.set(element, freqMap.get(element) + 1);
    }
  });
  return freqMap;
};

const arr = [1, 2, 2, 3, 3, 3];
console.log(arr.frequency());

Array.prototype.frequency = function () {
  return this.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
};


const arr = [1, 2, 2, 3, 3, 3];
console.log(arr.frequency());
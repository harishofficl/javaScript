/*
1.findindex()
2.filter()
3.for-each
4.reduce()
5.reduceRight()
6.map()
7.flatmap()
8.entries()
9.with()
10.spread()
*/

// 1.findindex()

//syntax: arr.findIndex(myfunc*(currentElement*,index,array),thisValue);
//return: index / -1;
//usable for: array;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//native
let index = -1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 5) {
    index = i;
    break;
  }
}
console.log(index); // 4

//findIndex
index = arr.findIndex((item) => item === 5);
console.log("findIndex: " + index); // 4

console.log("====================================");

// 2.filter()

//syntax: arr.filter(myfunc*(currentElement*,index,array),thisValue);
//return: array / empty array;
//usable for: array;

//native
const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filterArr = [];

for (let i = 0; i < newArr.length; i++) {
  if (newArr[i] > 5) {
    filterArr.push(newArr[i]);
  }
}
console.log("native: " + filterArr); // [6, 7, 8, 9, 10]

//filter
filterArr = newArr.filter((item) => item > 5);
console.log("filter(): " + filterArr); // [6, 7, 8, 9, 10]
console.log("====================================");

// 3.for-each

//syntax: arr.forEach(myfunc*(currentElement*,index,array),thisValue);
//return: undefined;
//usable for: array;

//native
const arr1 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}
console.log("\n");
//forEach
arr1.forEach((item) => console.log(item));
console.log("====================================");

// 4.reduce()

//syntax: arr.reduce(myfunc*(total*,currentElement*,index,array),initialValue);
//return: value / initialValue;
//usable for: array;

//native
const arr2 = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr2.length; i++) {
  sum += arr2[i];
}
console.log("native: " + sum);

//reduce
const sum1 = arr2.reduce(myfunc);


function myfunc(acc, item, index, numbers) {
  console.log(acc, item, index, numbers);
  return acc + item;
}

console.log("reduce(): " + sum1);
console.log("====================================");

// 5.reduceRight()

//syntax: arr.reduceRight(myfunc*(total*,currentElement*,index,array),initialValue);
//return: value / initialValue;
//usable for: array;

//native
const arr3 = [1, 2, 3, 4, 5];
let sum2 = 0;

for (let i = arr3.length - 1; i >= 0; i--) {
  sum2 += arr3[i];
}
console.log("native: " + sum2);

//reduceRight
const sum3 = arr3.reduceRight(myfunc1);

function myfunc1(acc, item, index, numm) {
  console.log(acc, item, index, numm);
  return acc + item;
}

console.log("reduceRight(): " + sum3);
console.log("====================================");

// 6.map()

//syntax: arr.map(myfunc*(currentElement*,index,array),thisValue);
//return: array / empty array;
//usable for: array;

//native
const arr4 = [1, 2, 3, 4, 5];
let newArr1 = [];

for (let i = 0; i < arr4.length; i++) {
  newArr1.push(arr4[i] * 2);
}
console.log("native: " + newArr1);

//map

const newArr2 = arr4.map((item) => {
  return item * 2;
});

console.log("map(): ", newArr2);
console.log("====================================");

// 7.flatmap()

//syntax: arr.flatMap(myfunc*(currentElement*,index,array),thisValue);
//return: array / empty array;
//usable for: array;

//native
const arr5 = [10, 2, 3, 4, 5];
let newArr3 = [];

for (let i = 0; i < arr5.length; i++) {
  newArr3.push(arr5[i]);
  newArr3.push(arr5[i] * 2);
}
console.log("native: " + newArr3);

//flatmap
const newArr4 = arr5.flatMap((item) => [item, 5, 90909, 1313, item * 2]);
console.log("flatMap(): " + newArr4);
console.log("====================================");

// 8.entries()

//syntax: arr.entries();
//return: array / empty array;
//usable for: array;

//native
const arr6 = [100, 222, 333, 4555, 52324];

const persons = [
  {
    first_name: "Harish",
    last_name: "S"
  },
  {
    first_name: "Suganth",
    last_name: "P"
  }
];

let entries = [];

for (let i = 0; i < arr6.length; i++) {
  entries.push([i, arr6[i]]);
}
console.log("native: ");
for (let e of entries) {
  console.log(e);
}

//entries
const entries1 = arr6.entries();
console.log("entries(): ");
for (let e of entries1) {
  console.log(e);
}

const persons1 = persons.entries();
for (let e of persons1) {
  console.log(e);
}

console.log("====================================");

// 9.with()

//syntax: arr.with(index,value);
//return: array / empty array;
//usable for: array;

//native
const month = ["January", "February", "Mar", "April"];
const myMonth = [];
for (let i = 0; i < month.length; i++) {
  if (i === 2) {
    myMonth.push("March");
  } else {
    myMonth.push(month[i]);
  }
}
console.log("native: " + myMonth);

//with
const months = ["January", "February", "Mar", "April"];


const myMonths = months.with(2, "March");


console.log("with(): " + myMonths);
console.log("====================================");

// 10.spread()

//syntax: [...arr1, ...arr2];
//return: array / empty array;
//usable for: array, string;

//native
const arr7 = [1, 2, 3, 4, 5];
const arr8 = [6, 7, 8, 9, 10];
const arr9 = [];

for (let i = 0; i < arr7.length; i++) {
  arr9.push(arr7[i]);
}
for (let i = 0; i < arr8.length; i++) {
  arr9.push(arr8[i]);
}
console.log("native: " + arr9);

//spread
const arr10 = [1, 2, 3, 4, 5];
const arr11 = [6, 7, 8, 9, 10];
const arr12 = [...arr10, ...arr11];
console.log("spread(): " + arr12);
console.log("====================================");

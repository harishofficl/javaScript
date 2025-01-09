/* stack
- static memory allocation
- primitive types and function calls only
- fast access [ LIFO ]
*/

/* Heap
- dynamic memory allocation (flexible)
- non-primitive data types i.e, arrays, objects
- complex and slow to access
*/

// stack memory example

const myName = "Harish";
let copyOfName = myName; // new copy of value is stored in stack

copyOfName = "Divakar"; // doesn't affect the original myName "Harish" value. (Independent)

console.log(myName); // Harish
console.log(copyOfName); // Divakar

// Heap memory example

const obj1 = {
  id: 1,
  myName: "harish",
};

let obj2 = obj1;
obj2.id = 2; // changing id for obj2

console.log(obj1); // id: 2
console.log(obj2); // id: 2

/*
obj2 id changes the id for obj1 also because only the object reference is stored in stack memory, 
actual value is stored in heap and both the stack reference point to the same value in the heap.
*/

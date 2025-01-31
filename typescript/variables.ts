// variables.ts
/// <reference lib="es2015.iterable" />

/* 
string
Partial<T>
Union (T | U)
ReadonlyArray<T>
Date
Literal types
Iterator<T>
Pick<T, K>
Abstract classes
*/

console.log("-----------------------------------------------------------");
// 1. String
const str: string = "harish";
console.log("String:", str);

console.log("-----------------------------------------------------------");
// 2. Partial<T>

interface person {
  name: string;
  grade: string;
  salary: number;
}

// makes properties optional
type partialPerson = Partial<person>;

const employee: partialPerson = { name: "Harish S", salary: 98000 };

console.log(employee);

console.log("-----------------------------------------------------------");
// 3. Union (T | U)

let numberString: string | Boolean = "One";
console.log(numberString);

numberString = false;
console.log(numberString);

console.log("-----------------------------------------------------------");
// 4. ReadonlyArray<T>

const readOnlyArray1: ReadonlyArray<number> = [1, 2, 3, 4, 5];
const readOnlyArray2: readonly string[] = ["Harish", "js", "ts"];
// readOnlyArray1[0] = -1; // error (only read)
console.log(readOnlyArray1);
console.log(readOnlyArray2);

console.log("-----------------------------------------------------------");
//5. Date

const currentDate: Date = new Date();
const millisecondDate: Date = new Date(5000000000);
const date: Date = new Date("2019-01-16");
let dateTime: Date = new Date(2018, 4, 5, 2, 23, 42, 11);

console.log(currentDate);
console.log(millisecondDate);
console.log(date);
console.log(dateTime);

console.log("-----------------------------------------------------------");
// 7. Literal types

type dice = 1 | 2 | 3 | 4 | 5 | 6;
type directions = "north" | "south" | "west" | "east";

function rollDice(): dice {
  return (Math.floor(Math.random() * 6) + 1) as dice;
}
const direction: directions = "west";
console.log(rollDice());
console.log(direction);

console.log("-----------------------------------------------------------");
// 8. Iterator<T>

// const map = { 1: "Virat Kohli", 2: "Sachin Tendulkar", 3: "Viv Richards" };
const numbers = [1, 2, 3, 4];
const it: Iterator<number> = numbers[Symbol.iterator]();

while (true) {
  let next = it.next();
  if (!next.done) console.log(next.value);
  else break;
}

console.log("-----------------------------------------------------------");
// 9. Pick<T, K>

type student = Pick<person, "name" | "grade">;

const stud1: student = { name: "Harish", grade: "A" };

console.log(stud1);

console.log("-----------------------------------------------------------");
// 10. Abstract classes

abstract class Animal {
  constructor(public name: string) {}

  abstract makeSound(): void;

  move(): void {
    console.log(`${this.name} is moving.`);
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log(`${this.name} says: Woof!`);
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log(`${this.name} says: Meow!`);
  }
}

const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

dog.makeSound();
dog.move();

cat.makeSound();
cat.move();

console.log("-----------------------------------------------------------");

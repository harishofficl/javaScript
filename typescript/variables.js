// variables.ts
/// <reference lib="es2015.iterable" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var str = "harish";
console.log("String:", str);
console.log("-----------------------------------------------------------");
var employee = { name: "Harish S", salary: 98000 };
console.log(employee);
console.log("-----------------------------------------------------------");
// 3. Union (T | U)
var numberString = "One";
console.log(numberString);
numberString = 1;
console.log(numberString);
console.log("-----------------------------------------------------------");
// 4. ReadonlyArray<T>
var readOnlyArray1 = [1, 2, 3, 4, 5];
var readOnlyArray2 = ["Harish", "js", "ts"];
// readOnlyArray1[0] = -1; // error (only read)
console.log(readOnlyArray1);
console.log(readOnlyArray2);
console.log("-----------------------------------------------------------");
//5. Date
var currentDate = new Date();
var millisecondDate = new Date(5000000000);
var date = new Date("2019-01-16");
var dateTime = new Date(2018, 4, 5, 2, 23, 42, 11);
console.log(currentDate);
console.log(millisecondDate);
console.log(date);
console.log(dateTime);
console.log("-----------------------------------------------------------");
function rollDice() {
    return (Math.floor(Math.random() * 6) + 1);
}
var direction = "west";
console.log(rollDice());
console.log(direction);
console.log("-----------------------------------------------------------");
// 8. Iterator<T>
// const map = { 1: "Virat Kohli", 2: "Sachin Tendulkar", 3: "Viv Richards" };
var numbers = [1, 2, 3, 4];
var it = numbers[Symbol.iterator]();
while (true) {
    var next = it.next();
    if (!next.done)
        console.log(next.value);
    else
        break;
}
console.log("-----------------------------------------------------------");
var stud1 = { name: "Harish", grade: "A" };
console.log(stud1);
console.log("-----------------------------------------------------------");
// 10. Abstract classes
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function () {
        console.log("".concat(this.name, " is moving."));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("".concat(this.name, " says: Woof!"));
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log("".concat(this.name, " says: Meow!"));
    };
    return Cat;
}(Animal));
var dog = new Dog("Buddy");
var cat = new Cat("Whiskers");
dog.makeSound();
dog.move();
cat.makeSound();
cat.move();
console.log("-----------------------------------------------------------");

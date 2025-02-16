function* infiniteNumberGenerator() {
    let number = 0;
    while (true) {
        yield number++;
    }
}

const generator = infiniteNumberGenerator();
console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let biggest = numbers[0];

numbers.forEach(num => {
    if(num > biggest) {
        biggest = num;
    }
});

console.log(biggest);
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let uniques = [];
let exists = {};

numbers.forEach(num => {
    if(exists[num] == undefined) {
        uniques.push(num);
        exists[num] = true;
    }
})

console.log(uniques);
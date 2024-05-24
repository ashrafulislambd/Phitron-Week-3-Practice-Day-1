let input = [20, 1, 19, 2, 18, 3, 17, 4, 16, 5, 15, 6, 14, 7, 13, 8, 12, 9, 11, 10]; // input

for(let i=0; i<19; i++) {
    for(let j=i+1; j<20; j++) {
        if(input[i] > input[j]) {
            let temp = input[i];
            input[i] = input[j];
            input[j] = temp;
        }
    }
}

console.log(input);
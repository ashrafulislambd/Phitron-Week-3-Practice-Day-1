let ans = []; 

for(let i=1; i<=50; i++) {
    if(i%3 == 0 || i%5 == 0) {
        ans.push(i);
    }
}

console.log(ans);
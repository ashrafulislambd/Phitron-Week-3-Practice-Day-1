var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let biggest = friends[0];
for(let i=1; i<friends.length; i++) {
    if(friends[i] > biggest) {
        biggest = friends[i];
    }
}

console.log(biggest);
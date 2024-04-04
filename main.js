let first = [2, 4, 9, 10, 45, 67, 8, 90];
let second = [];

console.log(`${first} 'boshlanishidagi array'`);

for (let i = 0; i < first.length; i++) {
    if (first[i] % 2 === 0) {
        second.push(first[i]);
    }
}

console.log(`${second} 'juft sonlarga ajratilgan array'`);

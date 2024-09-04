const array = [1, 1, 2, 3, 4, [2, 3, 5, 6, [1, 2, 3]]];

console.log(array.flat(3));

const array2 = [1, 2, 3, 4];

console.log(array2.flatMap((v) => [v, v * 2]));
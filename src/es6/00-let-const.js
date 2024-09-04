let fruit = 'Apple';

console.log('Fruit let variable: '.concat(fruit));

fruit = 'Kiwi';

console.log('Fruit let variable: '.concat(fruit));

const animal = 'Dog';

console.log('Animal constant variable: '.concat(animal));

try {
    animal = 'Cat'
} catch (e) {
    if (e instanceof TypeError) {
        console.log('Cannot modify constant animal');
    }
}

function fruits() {
    if (true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
    }

    console.log(fruit1);
    try {
        console.log(fruit2);
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Let variable fruit2 not defined");
        }
    }

    try {
        console.log(fruit3);
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Const variable fruit3 not defined");
        }
    }
}

fruits();
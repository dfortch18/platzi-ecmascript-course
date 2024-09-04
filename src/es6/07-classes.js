class User {

}

const newUser = new User();

// Methods

class user {
    greeting() {
        return 'Hello';
    }
}

const gndx = new user();

console.log(gndx.greeting());

const bebeloper = new user();

console.log(bebeloper.greeting());

// Constructor

class UserWithConstructor {
    constructor() {
        console.log('New user');
    }

    greeting() {
        return 'Hello';
    }
}

const david = new UserWithConstructor();

// this

class UserWithThis {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return 'Hello';
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const oscar = new UserWithThis('Oscar');

console.log(oscar.greeting());

// setters getters

class UserWithGettersAndSetters {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        return 'Hello';
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }

    set uAge(n) {
        this.age = n;
    }
}

const example = new UserWithGettersAndSetters('Example', 2);

console.log(example.uAge);

console.log(example.uAge = 13);
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

    get #uAge() {
        return this.age;
    }

    set #uAge(n) {
        this.age = n;
    }
}

const example = new UserWithGettersAndSetters('Example', 2);

console.log(example.uAge);

console.log(example.uAge = 13);
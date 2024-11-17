class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    exercise() {
        console.log(`${this.name} says: Running is fun! - said no one ever.`);
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}.`);
    }
}
class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = languages;
        this.busy = true; 
    }

    completeTask() {
        this.busy = false; 
    }

    acceptNewTask() {
        this.busy = true; 
    }

    offerNewTask() {
        if (this.busy) {
            console.log(`${this.name} can't accept any new tasks right now.`);
        } else {
            console.log(`${this.name} would love to take on a new responsibility.`);
        }
    }

    learnLanguage(newLanguage) {
        this.languages.push(newLanguage); // Adding a new language to the stack.
    }

    listLanguages() {
        return `${this.name} knows: ${this.languages.join(", ")}`;
    }
}

// Testing it out
const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "Janitor", 55, ["HTML", "SASS", "Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);

// Adding some new languages
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");

console.log(c1.listLanguages()); // Liana knows: HTML, C#, LUA, CSS
console.log(c2.listLanguages()); // Edwin knows: HTML, SASS, Ruby, C++
console.log(c3.listLanguages()); // Manny knows: HTML, CSS, JS, R, JAVA

console.log(person1); // Harold
console.log(c1);      // Liana
console.log(c2);      // Edwin
console.log(c3);      // Manny

// Person doing stuff
person1.exercise();
person1.fetchJob();

// Checking if programmers are busy
c1.offerNewTask(); // Liana is busy.
c1.completeTask();
c1.offerNewTask(); // Liana is now free.

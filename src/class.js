class Person {
  namer;
  constructor(namer) {
    this.namer = namer;
  }
  intro() {
    console.log(`i am ${this.namer}`);
  }
}
person = new Person("Juan");
console.log(person);

class Professor extends Person {
  teaches;
  constructor(namer, teaches) {
    super(namer);
    this.teaches = teaches;
  }
  introSelf() {
    console.log(
      `hi, my name is ${this.namer}, and i'll be your ${this.teaches} proffesor `
    );
  }
}

const proffesor = new Professor("Juanito", "mate");
proffesor.introSelf();

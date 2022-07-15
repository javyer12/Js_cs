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


//Platzi course
//prototipo con sintaxis de clases

class Student {
  constructor(name,age, approvedCourses) {
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;
  }

  takeCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

const Rafael = new Student(
  "Rafael",
  23,
  ["matematicas"]
  );

  console.log(Rafael)
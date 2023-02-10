class Person {
  constructor(name) {
    // public properties
    this.name = name;
  }

  
  getFrom() {
    // private value
    const state = 'Taiwan';
    // privileged methods
    return `${this.name} from ${state}.`
  };
}

class Employee extends Person {
  constructor(name, position) {
    super(name)
    this.position = position;
  }

  getPosition() {
    return `${this.name}'s position is a ${this.position}.`;
  }
}

const john = new Person('John');

console.log(JSON.stringify(john)); // { name: 'John' }  public 方法不再顯露於物件裡
console.log(JSON.stringify(john.state)); // undefined
console.log(JSON.stringify(john.getFrom())); // John from Taiwan.

const luck = new Employee('Luck', 'Front-end');

console.log(JSON.stringify(luck.getFrom())); // Luck from Taiwan.
console.log(JSON.stringify(luck.getPosition())); // Luck's position is the Front-end.
const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};
let person2 = Object.assign({}, person1);

person2['firstName'] = 'Simon';

console.log(person1);
console.log(person2);
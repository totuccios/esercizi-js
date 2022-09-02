const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};
const person2 = person1;
person2.firstName = 'Simon';
console.log(person1);
console.log(person2);
//é stato modificato anche person 1 visto che person2 è uguale a person1
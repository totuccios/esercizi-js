function getKeys(obj) {
  
  let objKeys = [];
  for (let key of Object.keys(obj)){
    objKeys.push(key)
  }
  return objKeys
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);
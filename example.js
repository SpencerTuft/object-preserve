Object.prototype.preserve = require('./index');

let my_object = {
  firstName: 'John',
  lastName: 'Doe',
  id: 36,
  phone: '999-999-9999',
  sex: 'male',
  race: 'white'
};

console.log(Object.preserve(my_object, ['firstName', 'lastName']));
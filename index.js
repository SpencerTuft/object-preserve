module.exports = function (my_object, preserved_keys) {
  if (!my_object || typeof my_object !== 'object') throw new Error(`Object parameter type error: ${typeof my_object}`);
  if (preserved_keys && Array.isArray(preserved_keys) && preserved_keys.every(key => typeof key === 'string')){
    Object.keys(my_object).forEach(key => {
      if (!preserved_keys.includes(key)) delete my_object[key];
    })
  }
  return my_object;
};

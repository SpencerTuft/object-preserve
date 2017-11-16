module.exports = function (object, preserved_keys) {
  if (!object || typeof object !== 'object') throw new Error(`Object parameter type error: ${typeof object}`);
  if (preserved_keys && Array.isArray(preserved_keys) && preserved_keys.every(key => typeof key === 'string')){
    Object.keys(object).forEach(key => {
      if (!Object.keys(object).some(preserved_keys === key)) delete object[key];
    })
  }
  return object;
};

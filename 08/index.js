function applyFunctions(functions) {
  return function (...args) {
    return functions.map((func) => func(...args));
  };
}

// Пример использования функции
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

const arrayOfFunctions = [add, subtract, multiply];

const combinedFunction = applyFunctions(arrayOfFunctions);

const results = combinedFunction(5, 3); // Вызовет add(5, 3), subtract(5, 3) и multiply(5, 3)

console.log(results); // Выведет: [8, 2, 15]

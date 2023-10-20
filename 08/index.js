//Принять массив функций в качестве аргумента:
function applyFunctions(functions) {
  //Вернуть другую функцию, которая принимает переменное количество аргументов:
  return function (...args) {
    //Внутри вложенной функции, применить каждую функцию из массива к переданным аргументам, используя метод map:
    return functions.map((func) => func(...args));
  };
}
//если вызвать функцию applyFunctions с массивом функций в качестве аргумента, она вернет новую функцию, которую можно вызвать с любым количеством аргументов. Каждая функция из исходного массива будет применена к переданным аргументам и результаты применения будут представлены в виде нового массива.

// Пример использования функции
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

const arrayOfFunctions = [add, subtract, multiply];

const combinedFunction = applyFunctions(arrayOfFunctions);

const results = combinedFunction(5, 3); // Вызовет add(5, 3), subtract(5, 3) и multiply(5, 3)

console.log(results); // Выведет: [8, 2, 15]

// v2
function applyFunctions(functions) {
  return function () {
    let results = [];
    for (let i = 0; i < functions.length; i++) {
      results.push(functions[i].apply(null, arguments));
    }
    return results;
  };
}

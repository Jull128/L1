const functionsArray = [
  /* ваш массив функций */
];

// Функция для вызова функций по порядку с задержкой
function callFunctionsSequentially() {
  let index = 0;

  // Внутренняя функция, вызывает следующую функцию в массиве
  function callNextFunction() {
    // Проверяем, достигли ли конца массива функций
    if (index < functionsArray.length) {
      const currentFunction = functionsArray[index];
      index++;

      // Вызываем функцию и выводим порядковый номер
      currentFunction();
      console.log("Вызвана функция №" + index);

      // Задержка в 1 секунду перед вызовом следующей функции
      setTimeout(callNextFunction, 1000);
    }
  }

  // Начинаем вызывать функции
  callNextFunction();
}

// Вызываем функцию для последовательного вызова функций
callFunctionsSequentially();

// v2 через рекурсию

const functions = [func1, func2, func3];

function callFunctions(index) {
  if (index < functions.length) {
    console.log("Вызов функции номер", index + 1);
    functions[index]();
    callFunctions(index + 1);
  }
}

callFunctions(0);

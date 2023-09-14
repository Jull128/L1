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
/*В этом коде functions - это массив, содержащий функции, которые вы хотите вызвать. 
  Функция callFunctions принимает индекс функции, которую нужно вызвать, и рекурсивно вызывает следующую функцию в массиве после вызова предыдущей. 
  Также выводится порядковый номер каждой вызываемой функции. 
  Вызывайте функцию callFunctions с индексом 0, чтобы начать вызывать функции с первой функции в массиве. */

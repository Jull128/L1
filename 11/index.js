function createClosure() {
  var externalVariable = "Эта переменная из внешней функции";

  function innerFunction() {
    console.log(externalVariable);
  }

  return innerFunction;
}

// Создаем замыкание
var closure = createClosure();

// Вызываем внутреннюю функцию, которая имеет доступ к externalVariable
closure();

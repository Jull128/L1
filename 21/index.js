let i = 0;

const func = () => {
  i++;

  func();
};

try {
  func();
} catch (e) {
  // Словили ошибку переполнения стэка и вывели значение счетчика в консоль
  console.log(i);
}
//13914

//v2
let i = 0;

const func = () => {
  let someVariable = i + 1;
  i++;

  func();
};

try {
  func();
} catch (e) {
  console.log(i);
}
//12523

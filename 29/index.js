function handleFormSubmit(event) {
  event.preventDefault(); // Предотвращаем отправку формы

  // Получаем доступ к форме и ее элементам
  const form = event.target;
  const inputName = form.querySelector("#name");
  const inputEmail = form.querySelector("#email");

  // Получаем значения из полей формы
  const name = inputName.value;
  const email = inputEmail.value;

  // Выполняем определенные действия с данными
  // Например, отправляем данные на сервер или отображаем их всплывающим окном
  // В данном примере просто выводим данные в консоль
  console.log(`Имя: ${name}`);
  console.log(`Email: ${email}`);

  // Очищаем поля формы
  form.reset();
}

// Получаем доступ к форме
const form = document.querySelector("#myForm");

// Добавляем обработчик события отправки формы
form.addEventListener("submit", handleFormSubmit);

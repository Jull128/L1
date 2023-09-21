function createAndAppendElement() {
  // Создаем шаблонный элемент
  const template = document.createElement("template");
  template.innerHTML = "<p>Новый элемент</p>";

  // Клонируем содержимое шаблона
  const clone = template.content.cloneNode(true);

  // Находим место, куда нужно добавить новый элемент
  const container = document.getElementById("container");

  // Добавляем клонированный элемент в DOM
  container.appendChild(clone);
}

// Вызываем функцию для создания и добавления нового элемента
createAndAppendElement();

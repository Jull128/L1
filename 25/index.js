function createAndStyleElement(tagName, styles) {
  // Создаем новый элемент
  const element = document.createElement(tagName);

  // Применяем стили к элементу
  for (const property in styles) {
    element.style[property] = styles[property];
  }

  // Добавляем элемент в DOM
  document.body.appendChild(element); // Или любой другой родительский элемент

  return element;
}

// Пример использования
const styles = {
  width: "200px",
  height: "100px",
  backgroundColor: "red",
  color: "white",
};

const newElement = createAndStyleElement("div", styles);

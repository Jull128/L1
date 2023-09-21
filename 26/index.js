function traverseDOM(node) {
  // Выводим информацию о текущем узле
  console.log(node.tagName);

  // Рекурсивно обходим всех детей текущего узла
  for (let i = 0; i < node.childNodes.length; i++) {
    const childNode = node.childNodes[i];
    // Проверяем, что это элемент, а не текстовый узел
    if (childNode.nodeType === Node.ELEMENT_NODE) {
      // Рекурсивно вызываем функцию для каждого дочернего элемента
      traverseDOM(childNode);
    }
  }
}

// Пример использования
const rootElement = document.getElementById("root");
traverseDOM(rootElement);

function JSONtoLinkedList(json) {
  // Парсим JSON
  const data = JSON.parse(json);

  // Проверяем, что список объектов не пустой
  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  // Создаем первый узел списка
  let head = { value: data[0], next: null };
  let currentNode = head;

  // Создаем остальные узлы списка
  for (let i = 1; i < data.length; i++) {
    const newNode = { value: data[i], next: null };
    currentNode.next = newNode;
    currentNode = newNode;
  }

  return head;
}

// Пример использования
const json =
  '[{"id": 1, "name": "A"}, {"id": 2, "name": "B"}, {"id": 3, "name": "C"}]';
const linkedList = JSONtoLinkedList(json);
console.log(linkedList);

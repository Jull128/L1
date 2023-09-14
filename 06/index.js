// Исходный массив объектов
var people = [
  { name: "John", age: 25 },
  { name: "Alice", age: 23 },
  { name: "Bob", age: 30 },
  { name: "Claire", age: 25 },
];

// Функция сравнения для сортировки
function compare(a, b) {
  if (a.age < b.age) {
    // Сортировка по возрастанию возраста
    return -1;
  } else if (a.age > b.age) {
    return 1;
  } else {
    // Если возраста равны, сортировка по полю name
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
}

// Сортировка массива по возрастанию возраста и алфавиту по полю name
people.sort(compare);

console.log(people);

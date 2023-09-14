function convertStringToJson(str) {
  // Проверяем, является ли переменная строкой
  if (typeof str !== "string") {
    throw new Error("Данные должны быть в строковом формате");
  }

  try {
    const json = JSON.parse(str);
    // Проверяем, является ли результат преобразования в JSON объектом
    if (typeof json !== "object" || Array.isArray(json)) {
      throw new Error("Невозможно преобразовать в JSON объект");
    }

    // Другие необходимые проверки и валидации
    // ...

    return json;
  } catch (error) {
    throw new Error(`Ошибка при конвертации в JSON: ${error.message}`);
  }
}

// пример
const jsonString = '{"name": "John", "age": 30}';
try {
  const jsonObject = convertStringToJson(jsonString);
  console.log(jsonObject);
} catch (error) {
  console.error(error);
}

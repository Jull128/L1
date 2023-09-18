import moment from "moment";

// Функция для выполнения операций с датами
function dateOperations() {
  // Получение текущей даты
  const getCurrentDate = () => {
    return moment().format("YYYY-MM-DD");
  };

  // Форматирование даты
  const formatDate = (date, format) => {
    return moment(date).format(format);
  };

  // Добавление определенного количества времени к дате
  const addTime = (date, amount, unit) => {
    return moment(date).add(amount, unit).format("YYYY-MM-DD");
  };

  // Определение разницы между двумя датами
  const diffDates = (date1, date2, unit) => {
    return moment(date1).diff(moment(date2), unit);
  };

  return {
    getCurrentDate,
    formatDate,
    addTime,
    diffDates,
  };
}

module.exports = dateOperations;

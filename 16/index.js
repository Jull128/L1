import dateUtils from "./dateUtils.js";

const currentDate = dateUtils.getCurrentDate();
console.log("Текущая дата:", currentDate);

const formattedDate = dateUtils.formatDate(new Date(), "DD MMMM YYYY");
console.log("Отформатированная дата:", formattedDate);

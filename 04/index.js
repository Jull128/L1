let declOfNum = (n) => {
  n = Math.abs(amount) % 100;
  let n1 = n % 10;
  if (n > 10 && n < 20) {
    return "товаров";
  }
  if (n1 > 1 && n1 < 5) {
    return "товара";
  }
  if (n1 == 1) {
    return "товар";
  }
  return "товаров";
};

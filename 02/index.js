const strangeNumber = (number) => {
  function sumStrange(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
      if (n % i === 0) {
        sum += i;
      }
    }
    return sum;
  }
  const testing = sumStrange(number);

  if (testing === number) {
    return true;
  } else return false;
};

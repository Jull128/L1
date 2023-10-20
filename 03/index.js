var MathX = (function () {
  // Функция для вычисления N-го числа в ряду Фибоначчи
  function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    let a = 0;
    let b = 1;
    let result = 0;
    for (let i = 2; i <= n; i++) {
      result = a + b;
      a = b;
      b = result;
    }
    return result;
  }

  // Функция для вычисления всех чисел в ряду Фибоначчи до числа N
  function fibonacciSeries(n) {
    const series = [];
    for (let i = 0; i <= n; i++) {
      series.push(fibonacci(i));
    }
    return series;
  }

  // Функция для вычисления N-го простого числа
  function nthPrime(n) {
    if (n <= 0) {
      return undefined;
    }
    let count = 0;
    let number = 2;
    while (true) {
      if (isPrime(number)) {
        count++;
        if (count === n) {
          return number;
        }
      }
      number++;
    }
  }

  // Функция для проверки, является ли число простым
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    if (number <= 3) {
      return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
    let i = 5;
    while (i * i <= number) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
    return true;
  }

  /*function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
} */

  // Функция для вычисления всех простых чисел до числа N (с использованием решета Эратосфена)
  function primesUpToN(n) {
    const isPrimeArray = new Array(n + 1).fill(true);
    isPrimeArray[0] = isPrimeArray[1] = false;

    for (let p = 2; p * p <= n; p++) {
      if (isPrimeArray[p]) {
        for (let i = p * p; i <= n; i += p) {
          isPrimeArray[i] = false;
        }
      }
    }

    const primes = [];
    for (let i = 2; i <= n; i++) {
      if (isPrimeArray[i]) {
        primes.push(i);
      }
    }

    return primes;
  }

  return {
    fibonacci: fibonacci,
    fibonacciSeries: fibonacciSeries,
    nthPrime: nthPrime,
    primesUpToN: primesUpToN,
  };
})();

// Примеры использования
console.log(MathX.fibonacci(5)); //  5
console.log(MathX.fibonacciSeries(8)); // [0, 1, 1, 2, 3, 5, 8, 13, 21]
console.log(MathX.nthPrime(4)); // 7
console.log(MathX.primesUpToN(20)); // [2, 3, 5, 7, 11, 13, 17, 19]

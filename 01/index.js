//1

/*
палиндромы:
кабак
довод
доход
лол
кек
мем
*/

word = "кабак";
reverse = "";

for (let i = word.length - 1; i >= 0; i--) {
  reverse += word[i];
}

if (reverse.toLowerCase() === word.toLowerCase()) {
  console.log("Слово является палиндромом!");
} else {
  console.log("Слово не является палиндромом!");
}

// v2

let half = Math.floor(word.length / 2);
let isPalindrom = true;

for (let i = 0; i < half; i++) {
  if (word[i].toLowerCase() === word[word.length - 1 - i].toLowerCase()) {
    continue;
  } else {
    isPalindrom = false;
    break;
  }
}
console.log(
  isPalindrom ? "Слово является палиндромом!" : "Слово не является палиндромом!"
);

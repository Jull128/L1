function checkLocalStorageSize() {
  try {
    var testData = "a";
    while (true) {
      localStorage.setItem("test", testData);
      testData += testData;
    }
  } catch (e) {
    console.log(
      "Максимальный объем данных в localStorage: " +
        (testData.length - 1) +
        " символов."
    );
  }
}

checkLocalStorageSize();

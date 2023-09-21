function convertJSONToString(json) {
  return JSON.stringify(json);
}

var json = {
  name: "John",
  age: 30,
  city: "New York",
};

var jsonString = convertJSONToString(json);
console.log(jsonString);

// Zadanie z JSONem

//Tworzenie zmiennej w formacie JSON 
const json = '{"name":"Mango","age":3,"isHappy":true}';

//Przekształcenie JSONa na objekt JS
const parsedObject = JSON.parse(json);
console.log(parsedObject);


// Oczekiwany wynik
// {
//   name: "Mango",
//   age: 3,
//   isHappy: true
// }


//Zadanie z obsługą błędów

const invalidJson = '{"name": "Mango", "age": 3, "isHappy": true,'; // Brakujący zamykający nawias klamrowy

try {
  const parsedObject = JSON.parse(invalidJson);
  console.log(parsedObject);
} catch (error) {
  console.error("Error name: ", error.name);
  console.error("Error message: ", error.message);
}


// Oczekiwany wynik
// Error name: SyntaxError
// Error message: Unexpected end of JSON input
var paragraphElement = document.querySelector(".multiplication");
var paragraphAdditionElement = document.querySelector(".addition");

var firstMultiplicationNumber = Math.ceil(Math.random() * 9);
var secondMultiplicationNumber = Math.ceil(Math.random() * 9);

var firstAdditionNumber = Math.ceil(Math.random() * 9);
var secondAdditionNumber = Math.ceil(Math.random() * 9);

var multiplicationQuestion = `${firstMultiplicationNumber} * ${secondMultiplicationNumber}`;

var additionQuestion = `${firstAdditionNumber} + ${secondAdditionNumber}`;

console.log(multiplicationQuestion);

paragraphElement.innerHTML = multiplicationQuestion;
paragraphAdditionElement.innerHTML = additionQuestion;

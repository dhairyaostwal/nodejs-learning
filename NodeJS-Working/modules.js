console.log(require("module").wrapper);

const Calculator = require('./controllers/Calculator');
const { greetEng, greetHindi, greetFrench } = require('./controllers/Greetings');
const c = new Calculator();

console.log(c.add(50, 30));
console.log(c.subtract(50, 30));
console.log(c.multiply(50, 30));
console.log(c.divide(50, 30));

console.log(greetEng("Naman"))
console.log(greetHindi("Dhairya"))
console.log(greetFrench("Yash"))
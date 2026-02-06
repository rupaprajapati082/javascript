// ------------------------------------------1. Double daily steps count------------------------------------------------
const steps = [1000, 2000, 3000];

function doubleSteps(step) {
  return step * 2;
}

const newSteps = steps.map(doubleSteps);
console.log(newSteps);
// Output: [2000, 4000, 6000]
// ------------------------------------------2. Convert minutes to seconds------------------------------------------------

const minutes = [1, 5, 10];

const seconds = minutes.map(function(min) {
  return min * 60;
});
console.log(seconds);
// Output: [60, 300, 600]
// -----------------------------------------3. Add ₹50 delivery charge to prices------------------------------------------------

const prices = [200, 350, 500];

const finalPrices = prices.map(price => price + 50);
console.log(finalPrices);
// Output: [250, 400, 550]
// -----------------------------------------4. Convert exam marks to grades------------------------------------------------

const marks = [35, 72, 88, 40];

function getGrade(mark) {
  return mark >= 40 ? 'Pass' : 'Fail';
}
const grades = marks.map(getGrade);
console.log(grades);
// Output: ['Fail', 'Pass', 'Pass', 'Pass']
// ------------------------------------------5. Capitalize names------------------------------------------------

const names = ['rahul', 'neha', 'amit'];

const formattedNames = names.map(name =>
  name[0].toUpperCase() + name.slice(1)
);console.log(formattedNames);
// Output: ['Rahul', 'Neha', 'Amit']
// -----------------------------------------6. Apply 10% discount------------------------------------------------

const price = [500, 1000, 1500];

function applyDiscount(price) {
  return price - price * 0.10;
}

const discounted = prices.map(applyDiscount);
console.log(discounted);
// Output: [450, 900, 1350]
// ------------------------------------------7. Add bonus points to scores based on condition------------------------------------------------

const scores = [45, 60, 85];

const finalScores = scores.map(score => {
  if (score >= 80) return score + 20;
  if (score >= 50) return score + 10;
  return score;
});

console.log(finalScores); 
// Output: [45, 70, 105]
// ------------------------------------------8. Convert temperatures with formula-----------------------------------------------


const celsius = [0, 20, 30];

function toFahrenheit(temp) {
  return (temp * 9/5) + 32;
}

const fahrenheit = celsius.map(toFahrenheit);
console.log(fahrenheit);
// Output: [32, 68, 86]
// ------------------------------------------9. Generate table of numbers------------------------------------------------

const numbers = [1, 2, 3, 4];

const tableOfTwo = numbers.map(num => num * 2);
console.log(tableOfTwo);
// Output: [2, 4, 6, 8]
// ------------------------------------------10. Combine map with string formatting------------------------------------------------

const balances = [500, 1200, 300];

const messages = balances.map(balance =>
  `Your balance is ₹${balance}`
);
console.log(messages);
// Output:
// [
//   'Your balance is ₹500',
//   'Your balance is ₹1200',
//   'Your balance is ₹300'
// ]

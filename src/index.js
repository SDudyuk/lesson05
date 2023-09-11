function reverseString(str) {
  let reverseString = '';

  for (let i=0; i<str.length; i++) {
    reverseString += str[str.length-1-i];
  }

  return reverseString;
}

function isPalindrome(str) {
  let parsedString = '';

  //так як регістр для поліндрома неважливий, приведемо в один регістр
  str = str.toLowerCase();

  //функція перевірки чи символ літера (лише для літер верхній та нижній регістр не рівні):
  const isLetter = (char) => char.toLowerCase() !== char.toUpperCase();

  //з вхідного рядка викидуємо всі символи окрім літер
  for (let i=0; i<str.length; i++) {
    parsedString += isLetter(str[i]) ? str[i] : "";
  }

  return parsedString !== "" ? parsedString === reverseString(parsedString) : false;
}

const inputString = prompt('Введіть рядок:');
console.log(`input string: ${inputString}`);
console.log(`Task 1\nreverse string: ${reverseString(inputString)}`);
console.log(`Task 2\npalindrome: ${isPalindrome(inputString)}`);

function findGCD(a, b) {
  let gcd = 1;
  a = Math.abs(a);
  b = Math.abs(b);

  let lessValue = a < b ? a : b;
  let greaterValue = a > b ? a : b;

  for (let i=lessValue; i>0; i--) {
    if (greaterValue % i === 0 && lessValue % i === 0) {
      gcd = i;
      break;
    }
  } 

  return gcd;
}

try {
  const numberOne = prompt('Введіть число 1:');
  const numberTwo = prompt('Введіть число 2:');

  const parsedNumberOne = Number(numberOne);
  const parsedNumberTwo = Number(numberTwo);
  
  if (Number.isNaN(parsedNumberOne)) {
    throw 'Число 1 не коректне!';
  }
  if (Number.isNaN(parsedNumberTwo)) {
    throw 'Число 2 не коректне!';
  }
  
  console.log(`Task 3\nfindGCD(${numberOne}, ${numberTwo}): ${findGCD(parsedNumberOne, parsedNumberTwo)}`);

} catch (e) {
  console.error(e);
}




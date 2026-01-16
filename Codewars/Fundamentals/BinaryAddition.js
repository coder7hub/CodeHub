/*
Implement a function that adds two numbers together and returns their sum in binary.
The conversion can be done before or after the addition.

The binary number returned should be a string.

Examples:
(Input1, Input2 --> Output)

1, 1  --> "10"   (1 + 1 = 2 in decimal → 10 in binary)
5, 9  --> "1110" (5 + 9 = 14 in decimal → 1110 in binary)
*/

// --------------------------------------------------
// Method 1: Using JavaScript built-in conversion
// --------------------------------------------------

function Binary(a, b) {
  const sum = a + b;
  const result = sum.toString(2);

  console.log(result);
}

Binary(10, 2);

// --------------------------------------------------
// Method 2: Manual decimal-to-binary conversion
// --------------------------------------------------

function B(num1, num2) {
  let addition = num1 + num2;
  const base = 2;

  if (addition === 0) return "0";

  let result = "";

  while (addition > 0) {
    const remainder = addition % base;
    result = remainder + result;
    addition = Math.floor(addition / base);
  }

  return result;
}

console.log(B(5, 5));

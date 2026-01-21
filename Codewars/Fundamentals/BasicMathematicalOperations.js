/**
 * Basic Mathematical Operations
 *
 * This file demonstrates multiple approaches to implement a function that performs
 * four fundamental mathematical operations: addition (+), subtraction (-),
 * multiplication (*), and division (/).
 *
 * The main function takes three arguments:
 *  - operation (string/char): the operator to apply
 *  - value1 (number): the first operand
 *  - value2 (number): the second operand
 *
 * It returns the result of applying the specified operation to the two numbers.
 *
 * Example Usage:
 *  ('+', 4, 7)  -->  11
 *  ('-', 15, 18) --> -3
 *  ('*', 5, 5)  -->  25
 *  ('/', 49, 7) -->  7
 *
 * This file showcases four approaches:
 * 1. If/Else Statements
 * 2. Switch/Case Statements
 * 3. Object Mapping (Lookup Table)
 * 4. Using eval() (not recommended for production)
 */

// Example input values
let operation = '+';
let value1 = 8;
let value2 = 8;

// 1. Using if/else statements
function Operation(operation, value1, value2) {
  if (operation === '+') return value1 + value2;
  if (operation === '-') return value1 - value2;
  if (operation === '*') return value1 * value2;
  if (operation === '/') return value1 / value2;
}
console.log(Operation(operation, value1, value2));

// 2. Using switch/case statements
function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+': return value1 + value2;
    case '-': return value1 - value2;
    case '*': return value1 * value2;
    case '/': return value1 / value2;
    default: return 0; // fallback for unknown operations
  }
}
console.log(basicOp(operation, value1, value2));

// 3. Using an object as a mapping (lookup table)
function basicOpOB(operation, value1, value2) {
  const cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  };
  return cases[operation];
}
console.log(basicOpOB(operation, value1, value2));

// 4. Using eval() (works but generally unsafe in production)
function basicOpEval(operation, value1, value2) {
  return eval(value1 + operation + value2);
}
console.log(basicOpEval(operation, value1, value2));

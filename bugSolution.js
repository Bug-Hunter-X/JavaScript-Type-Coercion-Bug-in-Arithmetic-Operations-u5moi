function add(a, b) {
  // Type checking before performing operation
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Error: Inputs must be numbers";
  }
  return a + b;
}

function subtract(a, b) {
  // Type checking before performing operation
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Error: Inputs must be numbers";
  }
  return a - b;
}

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6

// Handling non-numeric inputs
console.log(add("5", 3)); // Output: Error: Inputs must be numbers
console.log(subtract(10, "4")); // Output: Error: Inputs must be numbers
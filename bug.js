function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6

// Uncommon bug: Unexpected behavior with non-numeric inputs
console.log(add("5", 3)); // Output: 53 (string concatenation)
console.log(subtract(10, "4")); // Output: 6 (string coercion to number)
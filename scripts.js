function add (Num) {
  Num += 2;
  return Num;
}

function multiply (Num) {
  Num *= 3;
  return Num;
}

function subtract (Num) {
  Num -= 4;
  return Num;
}

console.log (add(multiply(subtract(8))));

/* So I guess following PEMDAS, the
console.log of 14 makes sense, though
I originally expected it to be 26 */
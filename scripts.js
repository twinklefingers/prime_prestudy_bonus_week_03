function add (Num) {
  Num = Num + 2;
  return Num;
}

function multiply (Num) {
  Num = Num * 3;
  return Num;
}

function subtract (Num) {
  Num = Num - 4;
  return Num;
}

console.log (add(multiply(subtract(8))));
function processNum (num) {

  function add (x) {
    return x += 2;    
   }
  function multiply (x) {
    return x *= 3;
  }
  function subtract (x) {
  return x -= 4;
} 
  console.log(add(multiply(subtract(num))));
}

processNum(8);

/* So I guess following PEMDAS, the
console.log of 14 makes sense, though
I originally expected it to be 26 */


//#1 Write a function sumMultiples taking a natural number n and returning the sum of all multiples of 3 and of 5 that are truly less than n.
function sumMultiples(n) {
   let sum = 0;
   for (let i = 0; i < n; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
         sum += i;
      }
   }
   return sum;
}
let n = 20;
console.log(`sum of all multiples of 3 and of 5 that are truly less than ${n} is ${sumMultiples(n)}`);

//#2 Write a function digitsum that calculates the digit sum of an integer. The digit sum of an integer is the sum of all its digits.
function digitsum(m) {
   let temp = m;
   let sum = 0;
   let s;
   let l = temp.toString().length - 1;
   while (temp > 0) {
      s = temp % Math.pow(10, l--);
      sum += ((temp - s) / Math.pow(10, l));
      temp = s;
   }
   return sum / 10;
}
let m = 192;
console.log(`sum of digits of ${m} is ${digitsum(m)}`);
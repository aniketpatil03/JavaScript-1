function reverseNum(num){
  let rev = parseInt(Math.abs(num).toString().split("").reverse().join(""))
  if (num < 0) rev = rev *= -1  // no need for {} for if as single statement
  return rev
}

console.log("123",reverseNum(123))
console.log("-123",reverseNum(-123))
console.log("120",reverseNum(120))
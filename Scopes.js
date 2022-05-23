/*
function myFunction1(){
  var value = 5
  return value
}
myFunction1()
console.log(value) // Reference error as value limited to myFunction() scope
*/

function myFunction2(){
  value2 = 5
  return value2
}
myFunction2()
console.log(value2)  // No error as value2 is GLOBAL scope as it's withuot let/var/const
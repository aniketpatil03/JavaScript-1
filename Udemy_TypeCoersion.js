//Type coercion to Booleanof of 0,{} ie empty object,'' empty string, NaN ie Undefine no
// is always false

console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean({}))
console.log(Boolean(NaN))

//So whenever Boolean type conversion of other than above hapen it gives o/p true.
const money=0;
if (money) { //Here Boolean type Coersion happens for money which is 0 hence false
    console.log("Dont spend it all")
} else {
    console.log("Get a job!")
}

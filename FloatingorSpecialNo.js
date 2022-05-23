let scale = 0
let a = 1/scale
console.log(a)    //infinity

let b = 0
console.log(0/scale)   //NaN

let c = -a
console.log(c)        // -infinity

let d = 1/c
console.log(d)         //  -0
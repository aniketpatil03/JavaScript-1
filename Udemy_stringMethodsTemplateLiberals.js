const str = "abc. def"
console.log(str[3])  //str[i] prints char from string at i


// Using String method
const str2 = "123456"
console.log('Using String method')
console.log(str2.charAt(5))




//Code to return First char
/*function firstChar(firstName, lastName)
  {
    return console.log(firstName[0]+ " " + lastName[0])
  }

firstChar("aniket","patil")
*/
//Template Liberals
const firstName = "Jonas";
const job = "Frontend Devloper";
const birthYear = 1998
const year = 2023

//Normal Method
const jonas = "I'm " + firstName + ' ,a ' + (year - birthYear) + " "+job; 
console.log(jonas)

//Using template liberal
console.log(`I'm ${firstName} ,a ${(year - birthYear)} ${job}`)


// Print to new line
console.log("this is a \n\
new line \n\
message")

//Using template liberals
console.log(`this is a new line \n\
using \n\
template liberal`)

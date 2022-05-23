function reverseString(str){
  let arr = str.split("")
  let reversedArray = arr.reverse()
  let reversedString = reversedArray.join("")
  console.log(reversedString)
}

reverseString("aniket")
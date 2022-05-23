function findLongestWordLength(str){
  strArray = str.split(" ")
  let max = 0
  for(let i = 0; i < strArray.length; i++){
    if (strArray[i].length > 0){
      max = strArray.length
    }
  }
  console.log(max)
}

findLongestWordLength("This is an Array with Longest word")
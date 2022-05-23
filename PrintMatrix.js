// Print a matrix of size 4
// logic modifided 
/* 
  for(let i=0; i< 5; i++){
    for(let j=0; j< 5; j++){
      console.log(arr[i][j])    
  }
*/

const arr = []
for(let i=0; i< 5; i++){
  let str = ""
  for(let j=0; j< 5; j++){
    str = str + arr[i][j]    
  }
  console.log(str)
}
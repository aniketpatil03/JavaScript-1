 //Generate a Matrix
function generateMatrix(size){
  
const  matrix = []
let count = 0
  
 for(let i=0; i< size; i++){
    const row = []
    for(let j=0; j< size; j++){
      row.push(count)
      count++
    }
   matrix.push(row)
 }
  return matrix
}
 

// console.log(generateMatrix(4))
console.log(generateMatrix(4))


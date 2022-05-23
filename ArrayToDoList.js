let array=[0,1,3,4]

function addToDo(item, priority){
  if (priority == "high"){
    array.unshift(item)
  }
  else{
    array.push(item)
  }
}

function clearToDo(index){
  array[index] = null
}

function updateToDo(index, newItem){
  array[index] = newItem
}

function getToDo(index){
  if (index == null){
    console.log(array)
  }
  else{
    console.log(array[index])
  }
}

addToDo(3)
console.log(array)

clearToDo(1)
console.log(array)

updateToDo(1,100)
console.log(array)


getToDo(0)
getToDo()
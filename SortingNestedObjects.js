/*sort it in descending order based on first_name field
If first_names are matching, sort in descending order by last_name field */

const objectArr = [
    { first_name: 'Lazslo', last_name: 'Jamf'     },
    { first_name: 'Pirate', last_name: 'Bodine'   },
    { first_name: 'Pirate', last_name: 'Prentice' }
];


objectArr.sort(function (person1, person2){
  return person2.first_name.localeCompare(person1.first_name)
  }
)

console.log(objectArr)

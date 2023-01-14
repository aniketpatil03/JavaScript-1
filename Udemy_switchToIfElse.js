const day = "Tuesday";

switch (day) {
    case "Monday":
    case "Thursday":
        console.log("Chest Workout only")
        break
    
    case "Tuesday":
    case "Friday":
        console.log("Back Workout only")
        // break
    // No break, hence prints 
    // Back Workout \n Legs Workout
    case "Saturday":
        console.log("Legs workout only")
        break
    
    case "Sunday":
        console.log("Rest Day")
        break
    
    default:
        console.log("Invalid Day entered")
        break
    
} 

// Switch to if-else

if (day === "Monday" || day === "Thursday") {
    console.log("Chest Workout only")
} else if (day === "Tuesday" || day === "Friday") {
    console.log("Back Workout only")
} else if (day === "Saturday" ) {
    console.log("Legs workout only")
} else if (day === "Sunday" ) {
    console.log("Legs workout only")
}
 else {
    console.log("Invalid Day entered")
}

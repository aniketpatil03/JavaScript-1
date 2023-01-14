let drink; // AR-1 Why declared outside ?

if (drink >= 18) {
    console.log("Wine 🍷")
} else {
    console.log("Water 💧")
}

// Conditional (Ternary) Operator conversion

const drink2 = drink >= 18 ? "Wine 🍷" : "Water 💧"; 
// Since  drink >= 18 ? "Wine 🍷" : "Water 💧  is a statement it can be used in string Literal

console.log(`I like to drink ${drink >= 18 ? "Wine 🍷" : "Water 💧"}`)



// AR-1 since it can be used outside scope if declared inside if-else scope

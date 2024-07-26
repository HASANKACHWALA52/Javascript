let person = {
    name: "Alice",
    age: "25"
};

// Accessing properties
console.log(person.name);  // Outputs: Alice

// Adding a property
person.email = "alice@example.com";

// Iterating through an object
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// alert(age)
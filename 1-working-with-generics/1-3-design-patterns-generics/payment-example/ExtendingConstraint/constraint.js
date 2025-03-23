// The correct syntax to apply a constraint to a generic type parameter in TypeScript is:
//
// <T extends Constraint>
//
// This syntax ensures that the generic type parameter T must extend or conform to the 
// structure of the specified Constraint. 
// It allows TypeScript to enforce type safety by restricting the types 
// that can be used with the generic.
// function implemetns interface HasLength, as len of its prop
function logLength(item) {
    console.log(item.length);
}
// MAINLINE
// Valid usage
logLength({ length: 10 }); // Output: 10
logLength("Hello"); // Output: 5 (string has a length property)
// NOTE: 
// Invalid usage (causes a TypeScript error)
// logLength(42); // Error: Argument of type 'number' is not assignable to parameter of type 'HasLength'.
logLength({ length: 25 }); // Output: 25 25 

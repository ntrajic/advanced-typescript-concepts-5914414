var NumberStrategy = /** @class */ (function () {
    function NumberStrategy() {
    }
    NumberStrategy.prototype.execute = function (input) { console.log(input * 2); };
    return NumberStrategy;
}());
var StringStrategy = /** @class */ (function () {
    function StringStrategy() {
    }
    StringStrategy.prototype.execute = function (input) { console.log(input.toUpperCase()); };
    return StringStrategy;
}());
// MAINLINE:
// Declare variables with their types
var ns = new NumberStrategy();
console.log("NumberStrategy:");
ns.execute(2); // NumberStrategy
var ss = new StringStrategy();
console.log("StringStrategy:");
ss.execute("two");
// compile: $ tsc strategy.ts
// OUT:
// $ node strategy.js
// NumberStrategy:
// 4
// StringStrategy:
// TWO

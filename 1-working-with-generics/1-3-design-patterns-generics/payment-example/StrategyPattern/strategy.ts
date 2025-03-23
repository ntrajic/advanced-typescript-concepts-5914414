interface Strategy<T> {
  execute(input: T): void;
}

class NumberStrategy implements Strategy<number> {
  execute(input: number) { console.log(input * 2); }
}

class StringStrategy implements Strategy<string> {
  execute(input: string) { console.log(input.toUpperCase()); }
}

// MAINLINE:

// Declare variables with their types
const ns: Strategy<number> = new NumberStrategy();
console.log("NumberStrategy:");
ns.execute(2);  // NumberStrategy

const ss: Strategy<string> = new StringStrategy();
console.log("StringStrategy:");
ss.execute("two");

// compile: $ tsc strategy.ts

// OUT:
// $ node strategy.js
// NumberStrategy:
// 4
// StringStrategy:
// TWO


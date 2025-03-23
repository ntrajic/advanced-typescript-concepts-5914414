// Strategy Interface
interface SortingStrategy<T> {
  sort(items: T[]): T[];
}

// Concrete Strategies
class NumberSort implements SortingStrategy<number> {
  sort(items: number[]) {
    return items.sort((a, b) => a - b);
  }
}

class StringSort implements SortingStrategy<string> {
  sort(items: string[]) {
    return items.sort();
  }
}

// Generic Context Class
class Sorter<T> {
  constructor(private strategy: SortingStrategy<T>) {}  // pass in generic SortingStrategy<T> instance

  setStrategy(strategy: SortingStrategy<T>) {
    this.strategy = strategy;
  }

  sort(items: T[]): T[] {
    return this.strategy.sort(items);
  }
}

// MAINLINE

// Usage
const numbers = [3, 1, 4];
const strings = ["cherry", "apple", "banana"];

const numberSorter = new Sorter(new NumberSort());
console.log(numberSorter.sort(numbers)); // [1, 3, 4]

const stringSorter = new Sorter(new StringSort());
console.log(stringSorter.sort(strings)); // ["apple", "banana", "cherry"]

// OUT:
// $ tsc sorting.ts 
// $ node sorting.js
// [ 1, 3, 4 ]
// [ 'apple', 'banana', 'cherry' ]

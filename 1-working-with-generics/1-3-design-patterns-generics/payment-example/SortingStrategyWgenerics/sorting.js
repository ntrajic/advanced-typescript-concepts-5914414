// Concrete Strategies
var NumberSort = /** @class */ (function () {
    function NumberSort() {
    }
    NumberSort.prototype.sort = function (items) {
        return items.sort(function (a, b) { return a - b; });
    };
    return NumberSort;
}());
var StringSort = /** @class */ (function () {
    function StringSort() {
    }
    StringSort.prototype.sort = function (items) {
        return items.sort();
    };
    return StringSort;
}());
// Generic Context Class
var Sorter = /** @class */ (function () {
    function Sorter(strategy) {
        this.strategy = strategy;
    } // pass in generic SortingStrategy<T> instance
    Sorter.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Sorter.prototype.sort = function (items) {
        return this.strategy.sort(items);
    };
    return Sorter;
}());
// MAINLINE
// Usage
var numbers = [3, 1, 4];
var strings = ["cherry", "apple", "banana"];
var numberSorter = new Sorter(new NumberSort());
console.log(numberSorter.sort(numbers)); // [1, 3, 4]
var stringSorter = new Sorter(new StringSort());
console.log(stringSorter.sort(strings)); // ["apple", "banana", "cherry"]

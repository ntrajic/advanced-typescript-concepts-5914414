"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardStrategy = void 0;
var CreditCardStrategy = /** @class */ (function () {
    function CreditCardStrategy() {
    }
    CreditCardStrategy.prototype.processPayment = function (amount) {
        // Simulate credit card payment processing
        console.log("Processing credit card payment for amount: $".concat(amount));
        return "Credit card payment of $".concat(amount, " processed.");
    };
    return CreditCardStrategy;
}());
exports.CreditCardStrategy = CreditCardStrategy;

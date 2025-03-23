"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayPalStrategy = void 0;
var PayPalStrategy = /** @class */ (function () {
    function PayPalStrategy() {
    }
    PayPalStrategy.prototype.processPayment = function (amount) {
        // Simulate PayPal payment processing
        console.log("Processing PayPal payment for amount: $".concat(amount));
        return "PayPal payment of $".concat(amount, " processed.");
    };
    return PayPalStrategy;
}());
exports.PayPalStrategy = PayPalStrategy;

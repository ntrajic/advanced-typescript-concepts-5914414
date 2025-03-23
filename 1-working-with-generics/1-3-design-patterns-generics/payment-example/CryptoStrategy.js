"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoStrategy = void 0;
var CryptoStrategy = /** @class */ (function () {
    function CryptoStrategy() {
    }
    CryptoStrategy.prototype.processPayment = function (amount) {
        // Simulate cryptocurrency payment processing
        console.log("Processing cryptocurrency payment for amount: $".concat(amount));
        return "Cryptocurrency payment of $".concat(amount, " processed.");
    };
    return CryptoStrategy;
}());
exports.CryptoStrategy = CryptoStrategy;

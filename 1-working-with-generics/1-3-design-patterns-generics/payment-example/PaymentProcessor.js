"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentProcessor = void 0;
var PaymentProcessor = /** @class */ (function () {
    function PaymentProcessor(strategy) {
        this.strategy = strategy;
    }
    PaymentProcessor.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    PaymentProcessor.prototype.processPayment = function (amount) {
        return this.strategy.processPayment(amount);
    };
    return PaymentProcessor;
}());
exports.PaymentProcessor = PaymentProcessor;

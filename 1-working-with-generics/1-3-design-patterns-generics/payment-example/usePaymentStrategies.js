"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PaymentProcessor_1 = require("./PaymentProcessor");
var CreditCardStrategy_1 = require("./CreditCardStrategy");
var PayPalStrategy_1 = require("./PayPalStrategy");
var CryptoStrategy_1 = require("./CryptoStrategy");
var amount = 150;
var creditCard = new CreditCardStrategy_1.CreditCardStrategy();
var payPal = new PayPalStrategy_1.PayPalStrategy();
var crypto = new CryptoStrategy_1.CryptoStrategy();
var paymentProcessor = new PaymentProcessor_1.PaymentProcessor(creditCard);
console.log(paymentProcessor.processPayment(amount)); // Uses Credit Card strategy
paymentProcessor.setStrategy(payPal);
console.log(paymentProcessor.processPayment(amount)); // Switches to PayPal strategy
paymentProcessor.setStrategy(crypto);
console.log(paymentProcessor.processPayment(amount)); // Switches to Cryptocurrency strategy

import { PaymentProcessor } from './PaymentProcessor';
import { CreditCardStrategy } from './CreditCardStrategy';
import { PayPalStrategy } from './PayPalStrategy';
import { CryptoStrategy } from './CryptoStrategy';

const amount = 150;
const creditCard = new CreditCardStrategy();
const payPal = new PayPalStrategy();
const crypto = new CryptoStrategy();

const paymentProcessor = new PaymentProcessor(creditCard);
console.log(paymentProcessor.processPayment(amount));  // Uses Credit Card strategy

paymentProcessor.setStrategy(payPal);
console.log(paymentProcessor.processPayment(amount));  // Switches to PayPal strategy

paymentProcessor.setStrategy(crypto);
console.log(paymentProcessor.processPayment(amount));  // Switches to Cryptocurrency strategy

//OUT:
// node usePaymentStrategies.js
// Processing credit card payment for amount: $150
// Credit card payment of $150 processed.
// Processing PayPal payment for amount: $150
// PayPal payment of $150 processed.
// Processing cryptocurrency payment for amount: $150
// Cryptocurrency payment of $150 processed.
$ 
import { sum } from './lib/math';

console.log(`
              _                          _
__      _____| | ___ ___  _ __ ___   ___| |
\\ \\ /\\ / / _ \\ |/ __/ _ \\| '_   _ \\ / _ \\ |
 \\ V  V /  __/ | (_| (_) | | | | | |  __/_|
  \\_/\\_/ \\___|_|\\___\\___/|_| |_| |_|\\___(_)

`);

const number1 = 42;
const number2 = 1337;
console.log(`the sum of ${number1} and ${number2} is ${sum(number1, number2)}`);

import { add, sub, mul, div, appName } from './calculator.js';  // Named export
import x from './calculator.js';  // Default export (export only 1)


console.log(appName);

add(10, 20)
sub(10, 20)
mul(10, 20)
div(10, 20)

console.log(x.temp);
x.demo();








// number issue 2

const { logDir } = require("headroom-ai");

// Number ---- 64 bits
console.log(Number.MAX_SAFE_INTEGER);          // store 2^53 - 1
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2);
console.log(Number.MAX_SAFE_INTEGER + 3);


let accountId = 9007199254740995n
console.log(accountId)

console.log(10 / 0)   // Infinity
console.log(-10 / 0)  // -Infinity
console.log(0 / 0)    // NaN

console.log('5' - 2)
console.log('abc' - 2)


// Interview question
console.log(NaN === NaN)        // false can't compare NaN with NaN







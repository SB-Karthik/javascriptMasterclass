const { logDir } = require("headroom-ai");

const browser = ['Chrome', 'Edge', 'Firefox']

// Destucture 
const [b1, b2, b3] = browser
console.log(b1);
console.log(b2);
console.log(b3);



const [browser1, ...x] = browser
console.log(browser1);
console.log(x);








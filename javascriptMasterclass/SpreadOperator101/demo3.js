// Add new elements in the array

const browser = ['Chrome', 'FireFox']

// copy of this array!!
const netBrowser = ['IE', ...browser, 'Edge']
console.log('netBrowser: ', netBrowser);
console.log('browser: ', browser);

browser.push('Safari');
console.log('netBrowser: ', netBrowser);
console.log('browser: ', browser);







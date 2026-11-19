// Async and await
// Async is used for function[asyc code]
// async functions return promise by default

async function test() {
    return 'Hello'

}

// const data = test();
// console.log(data);


// test().then((data) => console.log(data))


// Inorder to get the resolved vvalue from the promises  we use await keyword

const result = await test();
console.log(result);


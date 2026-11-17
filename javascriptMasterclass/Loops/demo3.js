const data = [`Jatin`, `Joshi`, `karthi`, `SDET`, `Youtube`]


data.forEach(function (user, index) {
    console.log(`${index} ${user}`)
})



data.forEach((user, index) => {
    console.log(`Hello ${user}`)
    console.log(index)
})
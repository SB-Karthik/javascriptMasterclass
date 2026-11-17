//rest operator
// take the multiple values => rest operator => one collection 


function add(no1, no2) {
    console.log(no1 = no2);
}

function add(...nos) {
    const finalSum = nos.reduce(function (total, no) {
        return total + no;
    }, 0)
    console.log('final Sum', nos, '=', finalSum);

}

add(10, 20)
add(10, 20, 30)
add(10, 20, 40, 50)




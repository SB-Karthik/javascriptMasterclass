import { add, div } from "./calculator.js";


let data;

try {
    data = add(10, '20')
    console.log(data);
}
catch (error) {
    console.log(error);
}

try {
    data = div(10, 0)
    console.log(data);
}
catch (error) {
    console.log(error);
}

finally {
    console.log('closing the APP');

}






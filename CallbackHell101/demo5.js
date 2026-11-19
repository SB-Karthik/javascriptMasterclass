// Problems in the callBack
// Any async operation can't put them in the try catch block
function a() {
    try {
        setTimeout(() => {
            throw new Error('Ouch!!!')
        }, 1000)

    }
    catch (error) {
        console.log(error.message)
    }
}


// a()



function b() {
    try {
        setTimeout(() => {
            try {
                throw new Error('Ouch!!!')
            }
            catch (error) {
                console.log('Inside the CB', error.message)
            }
        }, 1000)

    }
    catch (error) {
        console.log(error.message)
    }
}

b()

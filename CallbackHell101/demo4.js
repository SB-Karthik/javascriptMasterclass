// Problems in the callBack

function a() {
    try {
        throw new Error('Ouch!!!')
    }
    catch (error) {
        console.log(error.message)
    }
}

a()

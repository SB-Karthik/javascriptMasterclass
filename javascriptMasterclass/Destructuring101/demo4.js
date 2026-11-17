
const user = {
    name: 'Jatin',
    age: 27,
    course: 'SDET Master Class',
    address: {
        addressLine: {
            line1: 'C 302',
            line2: 'Sujatha Appartment'
        },
        city: 'Pune',
        country: `India`,
        pin_code: '570029'
    }
}

const {
    name,
    age,
    course,
    address: {
        addressLine: {
            line1,
            line2
        },
        city,
        country,
        pin_code: pinCode
    }
} = user;

console.log(city, country, pinCode, line1, line2);







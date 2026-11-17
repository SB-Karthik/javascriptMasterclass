let student = {
    'name': 'jatin',
    age: 22,
    contactNumber: '9289293852',
    department: 'CS',
    subject: ['js', 'java', 'DSA'],
    let: 100,
    class: 'Data',
    for: 10,
    'name': 'Uday'
}

// traverse the object 
for (let key in student) {
    console.log(key, ':=>', student[key])
}

console.log(student.name)






const company = {
    name: 'Tech with Jatin',
    trainer: {
        // name: 'Jatin',
        printTrainerInfo: function () {
            console.log('Trainer Name', this.name);

        }
    }
}


company.trainer.printTrainerInfo()

const company2 = {
    name: 'Tech with Jatin',
    trainer: {
        x: {
            name: "Raj"
        },
        printTrainerInfo: function () {
            console.log('Trainer Name', this.x.name);

        }
    }
}

company2.trainer.printTrainerInfo()
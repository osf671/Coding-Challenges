class person {
    private id: number;

    constructor(
        public ethnicity: string,
        public gender: string,
        public age: number,
        public lastName: string
    ) {
        this.lastName = `${this.lastName[0].toUpperCase()}${this.lastName
            .substr(1)
            .toLowerCase()}`;
        this.id = Math.floor(Math.random() * 100)
    }


}


const subjectNumber1 = new person('Hispanic', 'female', 26, 'emilia')
console.log(subjectNumber1)
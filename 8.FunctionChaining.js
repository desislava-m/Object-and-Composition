// let stringManipulator = {
    
//    setValue: (value) => {
//         this.value = value
//    },

//    toUpperCase: () => {

//         return this.value.toUpperCase()
//    },

//    toLowerCase: () => {

//         return this.value.toLowerCase()
//    },

//    print: () => {

//         console.log(this.value)
//    }
// }

// stringManipulator.setValue('Hello')
//   .toUpperCase()
//   .print()
//   .toLowerCase()
//   .print();



const stringManipulator = {

    value: '',

    setValue(newValue) {
        this.value = newValue;
        return this;
    },

    toUpperCase() {
        this.value = this.value.toUpperCase();
        return this;
    },

    toLowerCase() {
        this.value = this.value.toLowerCase();
        return this;
    },

    print() {
        console.log(this.value);
        return this;
    }
}
stringManipulator.setValue("Hello")
.print()
.toUpperCase()
.print()
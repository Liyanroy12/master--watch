// arrow vs normal function
// Non Arrow (standard way)
let add = function(x,y) {
  return x + y;
}
console.log(add(10,20)); // 30

// Arrow style
let add = (x,y) => x + y;
console.log(add(10,20)); // 30;

// You can still encapsulate
let add = (x, y) => { return x + y; };
const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            //keyword 'this' in arrow functions refers to the value of 'this' when the function is created
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}
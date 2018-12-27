// 1. ES6 Classes

// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function() {
//         console.log('draw');
//     }
// }

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    draw() {
        console.log('draw');
    }
}

const circle = new Circle(1);


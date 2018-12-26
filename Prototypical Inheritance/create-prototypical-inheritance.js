// 1. Creating Your Own Prototypical Inheritance

function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

Shape.prototype.draw = function() {
    console.log('draw');
}

function Circle(radius) {
    this.radius = radius;
}
// Circle.prototype = Object.create(Object.prototype); // inherits from objectBase previously
Circle.prototype = Object.create(Shape.prototype); // inherits from ShapeBase

const circle = new Circle(1);
const shape = new Shape();
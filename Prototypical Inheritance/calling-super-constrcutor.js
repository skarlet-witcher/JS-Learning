// 3. Calling the Super Constructor
function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

Shape.prototype.draw = function() {
    console.log('draw');
}

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype); // inherits from ShapeBase, also reset the prototype of Circle
Circle.prototype.constructor = Circle;

const shape = new Shape();
const circle = new Circle(1, 'red');


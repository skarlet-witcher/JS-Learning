// 2. Reset the constructor

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

// Circle.prototype.constructor = Circle;
// new Circle.prototype.constrcutor() => new Circle()
 
// when you reset the prototype, reset the constrcutor as well
Circle.prototype = Object.create(Shape.prototype); // inherits from ShapeBase, also reset the prototype of Circle
Circle.prototype.constructor = Circle;

const circle = new Circle(1);

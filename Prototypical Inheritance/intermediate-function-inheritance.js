// 4. Intermediate Function Inheritance
function extend(Child, Parent) { // capital letter for class
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
} 

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

extend(Circle, Shape)

function Square(size) {
    this.size = size;
}

extend(Square, Shape);

const shape = new Shape();
const circle = new Circle(1, 'red');
const square = new Square(10);


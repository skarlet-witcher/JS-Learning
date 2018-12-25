// 3. Prototype vs Instance Members
function Circle(radius) {
    // Instance Members
    this.radius = radius;

    this.move = function() {
        // prototype methods as well. look for the method in the __proto__
        this.draw()
        console.log('move');
    }
}

// Circle.prototype === c1.__proto__  (referencing the same obj in memory -> cricle base)
// Prototype Members
Circle.prototype.draw = function() {
    // can also call the instance members
    // this.move();
    console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(2);

// Overwrite the toString()
Circle.prototype.toString = function() {
    return 'Circle with radius ' + this.radius;
}
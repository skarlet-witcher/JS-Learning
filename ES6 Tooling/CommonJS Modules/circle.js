// Implementation Detail (hide details -- Abstraction)
const _radius = new WeakMap();


// Public Interface
class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log('Circle with radius ' + _radius.get(this));
    }
}

// CommonJS module
module.exports = Circle; // for only one class
// module.exports.Circle = Circle; // multiple classes

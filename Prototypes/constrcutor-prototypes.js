// 2. Constructor Prototypes
function Circle(radius) {
    this.radius = radius;
}

const circle = new Circle(1);

Object.getPrototypeOf(circle);

// circle.__proto__ (parent of circle)
// Constructor.prototype  (parent of circle)
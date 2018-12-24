
// 6. Adding or Removing Properties

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw a circle by constructor.');
    }
}

const circle = new Circle(10);
// two ways to add properties.
circle.location = { x: 1 };
circle['location'] = { x: 1 };
// delete properties
delete circle.location;
// 8. Abstraction
// 9. Private Properties and Methods (let)
// Hide the details
// Show the essentials
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    let computeOptimumLocation = function() {
        // ...
    };

    this.draw = function() {
        computeOptimumLocation();
        // defaultLocation
        // this.radius
        
        console.log('draw a circle by constructor.');
    }
}

const circle = new Circle(10);


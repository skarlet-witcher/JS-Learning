// 3. Static Methods
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Instance Method
    draw() {
        console.log('draw');
    }

    // Static Method (utility method)
    static parse(str) {
        const radius = JSON.parse(str).radius;  // JSON Object
        return new Circle(radius);
    }
}


// const circle = new Circle(1);
const circle = Circle.parse('{ "radius": 1 }');
console.log(circle);


// another example of static method
class Math2 {
    static abs() {
        // ...
    }
}

Math2.abs();

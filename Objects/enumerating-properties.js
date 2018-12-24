// 7. Enumerating Properties

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw a circle by constructor.');
    }
}

// one way to iterate keys in an object
for (let key in circle) {
    if(typeof circle[key] !== 'function') // only properties not methods.
    console.log(key, circle[key]); // bracket notation to access to the properties and methods.
}

// another way
const keys = Object.keys(circle);
console.log(keys);

if ('radius' in circle) {
    console.log('Circle has a radius')
}


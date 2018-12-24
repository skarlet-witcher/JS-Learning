// 2. Factory Function
function createCircle(radius) {
    return {
        radius, // radius: radius, (when param name = property name)
        draw: function() {
            console.log('draw a circle by factory');
        }
    };
}

const circle = createCircle(1);
circle.draw();


// 3. Constructor Function
function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function() {
        console.log('draw a circle by constructor.');
    }
    // no need to return.
}

const another = new Circle(1);
// const anotherCircle = Circle(1); // global object: window object.


// 4. Functions are objects
// On the console, Circle.constructor -> Function().....
const Circle1 = new Function('radius', `
console.log('this', this);
this.radius = radius;
this.draw = function() {
    console.log('draw a circle by constructor.');
}
`); // equal to new Circle(1).

const test_circle = new Circle1(1); 
// new Circle1(1) -> Circle.call({}, 1) or Circle.apply({}, [1,2,3]) with multiple params.

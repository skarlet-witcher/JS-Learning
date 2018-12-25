// 4. Iterating Instance and Prototype Members
function Circle(radius) {
    this.radius = radius;

    this.move = function() {
        console.log('move');
    }
}

Circle.prototype.draw = function() { // pass references
    console.log('draw');
}

const c1 = new Circle(1);

Object.keys(c1); // only return instance memebers
// "draw" is a prototype members

for(let key in c1) console.log(key);  // return all memebers (instance + prototype)

// 4. The This Keyword

class Circle {  // by default, the body of classes is executed in strict mode.  // prevent modifying global object.
    draw() {
        console.log(this);
    }
}

const c = new Circle();
const draw = c.draw;
draw();

/*
'use strict';

const Circle = function() {
    this.draw = function() {
        console.log(this);
    }
};

const c = new Circle();

// Method Call
c.draw();

const draw = c.draw; // save the reference not callin the method
console.log(draw);

// Function Call
draw(); // window object. undefined when using strict mode.
*/
 

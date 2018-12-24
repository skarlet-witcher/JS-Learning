// 1. create an object
// "var" replaces with "let" in ES6

const circle = {
    radius: 1,
    location:  {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw a circle.')
    }
}
circle.draw(); // dot notation.

// 10. Getters and Setters
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    this.draw = function() {
        console.log('draw');
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            // defensive programming
            if(!value.x || !value.y) {
                throw new Error('Invalid Location.');
            }
            defaultLocation = value;
        }
    })
}

const circle = new Circle(10);
circle.defaultLocation = { x: 1, y: 2 };
// circle.defaultLocation = 1;  run time error


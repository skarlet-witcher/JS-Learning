// 6. Private Members using WeakMaps
const _radius = new WeakMap();
const _move = new WeakMap();
// const privateProps = new WeakMap(); declare all members together.


class Circle {
    constructor(radius) {
        
        // privateProps.set(this, {
        //     radius: radius,
        //     move: () => {
                
        //     }
        // })

        // privateProps.get(this).radius;
        _radius.set(this, radius); // (key, values)
        _move.set(this, () => {  // use arrow function to get access to the Circle object which inherits from the constructor.
            console.log('move', this);  // this is undefined because of the strict mode in classes. 'this' will be the circle object when using arrow function.
        })
    }
    draw() {
        _move.get(this)();

        console.log(_radius.get(this));
    }
}



const c = new Circle(1);


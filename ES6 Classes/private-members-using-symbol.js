// 5. Private Members using Symbols

const _radius = Symbol();
const _draw = Symbol();

class Circle {
    constructor(radius) {
        //this.radius = radius;
        // this['radius'] = radius;  the same
        this[_radius] = radius;
    }
    // ES6: computer property name
    [_draw]() {

    }
}

const c = new Circle(1);
// private but still accessible in a hack way
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);


// 6. Method Overrding
class Shape {
    move() {
        console.log('move');
    }
}

class Circle extends Shape {
    move() {
        // due to the checking sequence for JS engine, if want to access to parent mehod, use super keyword. 
        super.move();
        console.log('move circle')
    }
}


const c = new Circle('red', 1);
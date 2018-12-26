// 6. Mixins
function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}
const canEat = {
    eat: function() {
        this.hunger--;
        console.log('eating');
    }
}

const canWalk = {
    walk: function() {
        console.log('walking');
    }
}

const canSwim = {
    swim: function() {
        console.log('swim');
    }
}

function Person() {

}
mixin(Person.prototype, canEat, canWalk);
// Object.assign(Person.prototype, canEat, canWalk); // copy properties and methods to target object.
// const person = Object.assign({}, canEat, canWalk);
const person = new Person();
console.log(person);

function GoldFish() {

}
mixin(GoldFish.prototype, canEat, canWalk);
// Object.assign(GoldFish.prototype, canEat, canSwim);
const goldFish = new GoldFish();
console.log(goldFish);




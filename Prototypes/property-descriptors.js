// 1. Property Descriptor
let person = { name: 'Xiangkai' };

// set the descriptor for an object
Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
});

person.name = 'John';  // can't be changed (writable)

delete person.name  // nothing happened (configurable)

console.log(Object.keys(person)); // no keys returned. (enumerable)




// check the descriptor to ensure the settings of properties or methods.
// such as configurable, enumerable, wirtable, value .... 
/*

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);

*/

// the methods and properties in ObjectBase are not visible
/*

for (let key in person) {
    console.log(key);
}

*/
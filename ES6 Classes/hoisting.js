// 2. Hoisting

sayHello();

// sayGoodBye(); compile time error (function expression cannot)
// console.log(number); compile time error (function expression cannot)

// Function Declaration
function sayHello() {}

// Function Expression  (need to write the semi-colon at the end) and cannot be executed before declared.
const sayGoodBye = function () {};
const number = 1;

// both are not hoisted.
// Class Declaration
class Cirlce {

}

// Class Expression
const Square = class {

};

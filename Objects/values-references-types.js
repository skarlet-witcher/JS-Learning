// 5. Value vs Reference Types
let x = 10;
let y = x; // copy into a new variable. They are independent

x = 20;
console.log('x = ', x);
console.log('y = ', y);

// ---- using reference types
let x1 = { value: 10 };
let y1 = x1;

x1.value = 20;
console.log('x1 = ', x1);
console.log('y1 = ', y1);
// -----
let number = 10;

function increase(number) { // independent from the "number" above
    number++;
}

increase(number);

console.log(number);


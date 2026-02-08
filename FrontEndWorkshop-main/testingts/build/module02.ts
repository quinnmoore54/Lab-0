let x2: number = 10;
// x2 = "test";
console.log(x2);


let y = 1;       //* Implicitly declares y as a number type
// y = "one";
console.log(y);


let z: any;           //* Excplicitly declares z with any 
z = 10;
z = "one";
console.log(z);


let k2 :unknown;
k2 = 678;
k2 = console.log(k2);
x2 = k2 as number;


let firstName2: string = "John";
let salary2: number = 80000;
let sentence2: string = `My name is ${firstName2} and my salary is ${salary2}.`;
console.log(sentence2);



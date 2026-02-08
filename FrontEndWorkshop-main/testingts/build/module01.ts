// https://www.typescriptlang.org/docs/

let x: number;   //* Explicitly declares x as a number type
x = 2;

console.log(x);

let y = 1;       //* Implicitly declares y as a number type
//y = "one";
console.log(y);

let z: any;           //* Excplicitly declares z with any 
z = 10;
z = "one";
console.log(z);


let k :unknown;
k = 678;
k = console.log(k);
x =  k as number;


let flag: boolean;
let yes = true;
let no = false;

let s: string;
let empty = "";
let abc = 'abcstring';


let firstName: string = "John";
let salary: number = 80000;
let sentence: string = `My name is ${firstName} and my salary is ${salary}.`;
console.log(sentence);



// Interfaces
interface Student{
  name: string;
  BuckID: number;
  Phone: number;
}

let mas : Student = {name: 'MAS', BuckID: 1234567, Phone:777777777};
console.log(mas.name+": "+ mas.BuckID + ", "+ mas.Phone)


// Type Alias

type num = number;
let l: num;
l = 20;
console.log(l);

// Union types
type mytype = string | num;
let p: mytype = 100;
console.log("p as a number: "+ p);
p = "test string";
console.log("p as a string: "+ p);
 // p = true;
 

function addNumbers(x: number, y:number) {
  return x + y;
}
console.log("Sum: "+ addNumbers(3, 6));


interface Employee{
  name: string;
  EID: number;
  Phone: number;
  address?: string;
}

// Utility types

let E1: Employee = {name: "MAS", EID: 12345, Phone: 7787789191};


// let E2: Required <Employee> = {name: "MAS", EID: 12345, Phone: 7787789191};
let E2: Required <Employee> = {name: "MAS", EID: 12345, Phone: 7787789191, address:"123 ST Name. Columbus, OH 43210"};


let E3: Omit<Employee, "Phone"> = {name: "John", EID: 12543};
// let E3: Omit<Employee, "Phone"> = {name: "John"};


let E4: Pick<Employee, "EID"> = {EID: 12543 };
// let E4: Pick<Employee, "EID"> = { name: "John", EID: 12543, Phone:7787789191 };

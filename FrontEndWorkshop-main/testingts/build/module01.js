// https://www.typescriptlang.org/docs/
var x; //* Explicitly declares x as a number type
x = 2;
console.log(x);
var y = 1; //* Implicitly declares y as a number type
//y = "one";
console.log(y);
var z; //* Excplicitly declares z with any 
z = 10;
z = "one";
console.log(z);
var k;
k = 678;
k = console.log(k);
x = k;
var flag;
var yes = true;
var no = false;
var s;
var empty = "";
var abc = 'abcstring';
var firstName = "John";
var salary = 80000;
var sentence = "My name is ".concat(firstName, " and my salary is ").concat(salary, ".");
console.log(sentence);
var mas = { name: 'MAS', BuckID: 1234567, Phone: 777777777 };
console.log(mas.name + ": " + mas.BuckID + ", " + mas.Phone);
var l;
l = 20;
console.log(l);
var p = 100;
console.log("p as a number: " + p);
p = "test string";
console.log("p as a string: " + p);
// p = true;
function addNumbers(x, y) {
    return x + y;
}
console.log("Sum: " + addNumbers(3, 6));
// Utility types
var E1 = { name: "MAS", EID: 12345, Phone: 7787789191 };
// let E2: Required <Employee> = {name: "MAS", EID: 12345, Phone: 7787789191};
var E2 = { name: "MAS", EID: 12345, Phone: 7787789191, address: "123 ST Name. Columbus, OH 43210" };
var E3 = { name: "John", EID: 12543 };
// let E3: Omit<Employee, "Phone"> = {name: "John"};
var E4 = { EID: 12543 };
// let E4: Pick<Employee, "EID"> = { name: "John", EID: 12543, Phone:7787789191 };

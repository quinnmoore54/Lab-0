// Test the logging on the console by:
// 1. Right-clicking anywhere on the page.
// 2. Selecting "Inspect" from the context menu.
// 3. The browser opens up a source code page with multiple tabs; click on "Console."
// 4. You can now test your code in the console.

console.log("test");
for(let i = 0; i< 5; i++){
    console.log(i+"\n");
}

function Sum(){
    let a = [1, 2, 3];
    let total = 0;
    for(let i = 0; i< 5; i++){
        total += i;
    }
    return total;
}

let dynamicVariable = 42;
console.log(dynamicVariable);
dynamicVariable = "Hello";
console.log(dynamicVariable);

let y = 5.5;
console.log(" y = " + y);
y = "test";
console.log(" y = " + y);



function Animal(name) { this.name = name; }
Animal.prototype.sound = function() { console.log("Generic sound"); };
let cat = new Animal("Whiskers");
cat.sound();
let dog = new Animal("Dog name");
dog.sound();


function greet(name) { return "Hello, " + name + "!"; }
let greeting = greet("Alice");
console.log(greeting);

function getArray(){
    myarray = [1,2,3,4,5,6];
    return myarray;
}

console.log(getArray());

for (let i = 1; i <= 5; i++) { console.log("Iteration: " + i); }

setTimeout(() => { console.log("Delayed message"); }, 2000);

let name2 = "John", age = 25, isStudent = true, 
hobbies = ["Reading", "Coding"];
console.log(name2 +"\n"+age +"\n"+isStudent+"\n"+ hobbies+"\n");

console.log("Array sum: "+Sum());
var myText = document.getElementById("myTextArea");

myText.value = name2 +"\n"+age +"\n"+isStudent+"\n"+ hobbies+"\n"


myText.value += getArray();


button2.onclick = function printText(){
myText.value = "Hello. This is a greeting";

for (let i = 1; i <= 5; i++) {
    // myText.value += "\n"+"Iteration: " + i; 
    if(i > 2){
    console.log("Iteration "+ i);
    }
    }

}



document.getElementById("button2").addEventListener("click", function() { console.log("Button clicked!"); });

myText.addEventListener("focusin",change2White);
myText.addEventListener("focusout", change2Grey);
function change2Grey(){
    myText.style="background-color: grey";
    console.log("MOUSE OVER");
}
function change2White(){
    myText.style="background-color: white";
    console.log("MOUSE OUT");
}


let add = (a, b) => a + b;
console.log(add(3, 5)); // Outputs: 8

let multiply = (a,b, c) => a*b*c;
myText.value = multiply(1,2,5);


let name3 = "John";
let Hi = `Hello, ${name3}!`;
console.log(Hi); // Outputs: Hello, John!


let numbers = [1, 2, 3, 4];
let [a, b, c] = numbers;
console.log("Test de-structing: "); // Outputs: 1 2 3
console.log(a,b,c); // Outputs: 1 2 3



let newFunction = (a,b,c) => {return a+b+c;};
console.log(newFunction(1,2,30));


inputUserName = document.getElementById("userNameInput");
inputPassword = document.getElementById("passwordInput");
NewBTN = document.getElementById("NewButton");

NewBTN.onclick= function CheckInput(){
    if(inputUserName.value === "")
    {
        inputUserName.style = "background-color: red";   
    } else{
        inputUserName.style = "background-color: white";  
    }       
    if(inputPassword.value === "")
    {
        inputPassword.style = "background-color: red";   
    } else{
        inputPassword.style = "background-color: white";  
    } 
}




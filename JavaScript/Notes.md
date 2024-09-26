JavaScript
-javaScript Meaning and how code execution in JS Enginee
-Code Executuion in phaes Memeory enviroment and code enviroment

-Words and Keyword
*Words= Those word which doesn't have any meanig in javascript like hello, bhai koko and more
*Keyword= Those word which have a meanig in javascript like if else else if while var const

--Compiler and Interpreter both are in js to chech the error and if not found any error then it run the code sucessfully

*Compiler= This compile all code and give error at last if there is error then otherwise it executed the code
           -Compiler convert into machine code where machine code is slow in converting but fast in working

*Interpreter= In this code executed line by line and where error found then it stop executing their
              -Interpreter convert into Byte code where byte code is fast in converting but slow in working 
    
-JIT Compiler (Just In Time Compiler) = This is the combination of both Compiler and Interpreter where we can get the benifite from both and minimize the drawback of the both.
*In this compiler The Interpreter converting fast in JIT and Compiler working is fast but the drawback is Interpreter is in Bytecode and Compiler is in Machine code so we use insecpector to convet the language.

--3 difference of var and let
*var is from old js ES5 and let id form new js ES6
*var is function scoped and let is braces scope
*var itself add on window object and let doesn't add itself on windows object

NOTE: What is Windows Object?
=> In javaScript there is something whichis not a part of JS language, but this can get from own broeswe, which means this is not in language which provide during the develpoment. lIke "console document, setTimeout and many more which provided by Browser windows"

--Variable and Constants

*Variable= A variable is like a container containing the values or data of a particular data type that helps to execute the program.

Correct JavaScript variables
var x = 10; 

Incorrect JavaScript variables
var  123=30;

JavaScript local variable
A JavaScript local variable is declared inside block or function.
<!-- <script>  
function abc(){  
var x=10;//local variable  
}  
</script>   -->

JavaScript global variable
A JavaScript global variable is accessible from any function.

<!-- <script>  
var data=200;//gloabal variable  
function a(){  
document.writeln(data);  
}  
function b(){  
document.writeln(data);  
}  
a();//calling JavaScript function  
b();  
</script> -->

*Constant= A constant is a fixed value whose value cannot be changed during program's execution or once the value is defined.

==Types In JavaScript
--Primitives :  Number
                Strings
                Boolean
                Undefine
                NULL
--reference=    []-Array
                {}-Object 
                ()-function/method

==Conditionals -if else else-if
*we can directly use true false in conditionals
*we have to write something that convert into true or false 
*exception conditional like truthy and falsy
<!-- if("hello"){

} 
else{

}-->

Falsy value like = {0, false, "", undefined, null, NaN, document.all, 'If this value doesn't match with (parameter) then it will be true.'}

==ternary operator 
if we want to print in a single line the statement i.e agar 12 3 se bada haii print hello nahito print hey

<!-- Eg:Format: 12>3 ?console.log("hello"):console.log("hey"); -->

==logical operator ||
*jab bhi app chhahte ho ki mere liya ek calculation karo aur agar us calculation ka answer aajaye to us calculation ka answer dena and agar falsy aaye to fir falsy mat rakhna uski jagah null daal dena

*jab aapko aisa chahiya variable mein agar koi falsy value naa ho to mujhe wahi value dena nahito null dena

//10 question od conditionals

==for / forEach / forin / map / filter

*for = computer ka janam hua tha kaam ko tezi se kai baar bina galat huya more efficient way mai krna ke liya => loop
loop ka matlab hota haiii repeat
NOTE: "Loop humesha question ko dekh kr create hota haii, kabhi bhi andhi mein loop create nhi krta hai."

*forEach = forEach only used in when we have only array
-forEach loop array ke har ek memebr par ek baar chalta hai...
-forEach always accept function
-syntax of forEach

<!-- var arr = [1,2,3,4,5,6];
arr.forEach(function(val)
{
    console.log(val)
}); -->

*for in = `the for..in loop in javaScript is used to iterate over the enumerable properties of an object. This loop will go through all the property names(keys) of an object one bt one`

<!-- const person = {
    name: "john,
    age: 30,
    city: "New York"
};

for(let key in person){
    console.log(key + ":" +preson[key]);
} -->

*=MAP => map ka matlab array ke ek ek member par koi calculation kro and uska answer save kro ek naya array mei
map ka use mainly tab hota hai jab apko ek array mein koi calculation karna ho and uska answer save krna ho ek new array mai
NOTE="Return is the most important in map without return map can't perform its calculation and imagine array mai save hu data ko show krna k liya a variable mai save krna hoga arr.map(function(){}); ko"

<!-- var arr = [1,2,3,4,5,6,7];
    var ans = arr.map(function(val){
        return val+2; //[3,4,5,6,7,8,9]
    })
-->

*=Filter = jab bhi array hota hai and aapko uske har member per jaana hai and uske kisi member ko apko place krna haii naye array mai and kisi ko nahi, wha per filter aata hai.
filter kind of similar to map but return mai huma kuch ayse likhna hoga ki wo true or false mai convert hojya taki hum imahinary array mai wo value ko rakh saka
<!-- //filter

// var arr = [1,2,3,67,4,6,45,87,48,42,44,89,3,6,0,4];

// var ans = arr.filter(function(val){
//     //retuen kuch yesa likhna haii ki wo true or false mai convert hojya bas

//     return val > 8; //[67,45,87,48,42,44,89];
// }) -->

==Array.Reduce in js = The Array.reduce method in JavaScript is used to reduce an array to a single value by applying a function to each element of the array (from left to right) and accumulating the results.

<!-- const arr = [1,2,3,4,5,6,7,8,9,5];

const ans = arr.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
},0)

console.log(ans) -->


*==*OBJECT :- 
<!-- var obj = {
    user: "Aashu",
    age: 23,
    isSingle: true
}
console.log(obj) -->

<!-- var user = {
    name: "Aashu",
    age: 23,
    sayName: function(){
        console.log("hey aashu !!") 
        //The function inside of the object called as method.
    }
}
console.log()
user.sayName() -->


**==first class function==**
`A first-class function is a concept in programming where function are treated as first-class citizens.This means that function can be stored in variable,passed as argument to other function, return from other function, and generally treated like any other value.`
-jab ap function ko normal variable ki value ki tahar treat karta hai us function ko first class function kaha jata hai
-we can save function in a variable eg var a = function(){}
-we can pass function as an argument in first class function

<!-- function abcd(val){
    val();
}
abcd(function(){consol.log("12")});
 -->

<!-- // A function assigned to a variable
const greet = function(name) {
    return `Hello, ${name}!`;
};

// A function that takes another function as an argument
function sayHello(func, name) {
    console.log(func(name));
}

// Passing the greet function as an argument
sayHello(greet, 'Alice');

// A function that returns another function
function createGreeting(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

// Using the returned function
const greetHello = createGreeting('Hello');
console.log(greetHello('Bob'));
 -->


**==New keyword==**
-jab bhi ap ek constructor function banyangay aur apka goal hoga us constructor function ke base per uski multiple copies banan jinko hum instances ketha ahi, tab role mai aayga NEW keyword 
**==Instance==** = An instance is a unique object that has been created using the new keyword, which invokes the constructor of a class or function


**==** 1)Jab bhi new likha dikh jaya apne maan mai ek blank object create krlo

function biscuitMaker(){
    this.name = "Shayam";
    this.age = 24;
    this.gender = "Male";
}

new biscuitMaker();    //maan mai blank Object create krlo {  name: "shyam", age: 24, gender: "male"   }

2) New ke aage jo function hai wo chalado and uske ander jaha jaha this likha hai waha waha this ke aage likha hua cheeji ko us blank object ki property maan lena and jo value likha hai wahi sab value blank object ami set krdo


**==Constructor Function==**
-ek aisa function jiske kaam hi haii us function ko chalakar naye naye object bana, qki wo function chalta bakt new keyword ke sath chalta hai and isis wahja se wo function har baar ek new object bana deta hai.

=`A constructor function is a function that is used to create multiple instances of object with similar properties and methods`
=`A constructor function in javaScript is a special type of function used to cretae and initialize object, when you use the {new} keyword is used to create a new object and sets where{this} refre to that new object.`
<!-- function sachaaOfBiscuite(){
    this.width= 12,
    this.height= 22;
    this.color= "Brown",
    this.tast= "sweety"
}

var bis1 = new sachaaOfBiscuite();
var bis2 = new sachaaOfBiscuite();
var bis3 = new sachaaOfBiscuite();

console.log(bis1,bis2,bis3); -->


**==FUNCTION IN JAVASCRIPT==**
== In JavaScript, functions are blocks of code designed to perform a particular task. 
== They can be called (or invoked) when needed, which helps keep your code organized and reusable. 

//==agar kis code ko baar baar likhna padhaga us se aacha hum us code ko ek baar likhte hai aur uska name kuch vi rakh deta hai to hum uske name se hi use kr sakta hai har jhaga

//==//**function dance(){

}dance(); // ab hum yei dance ko har jhaga dance() likhna se sara dance ka code different jhaga likhna nhi padha ga sirf dance() hojyga

*NOTE* function khus nhi chala jab thak function ka name call nhi kiya jyga to simply '{...}'is ke baad jo name diya hai wahi firse likhna hai uska matlab function ko call krna bolta hai.

**==Parameter and Argument==**
`Parameters are like placeholders in a function defination, they are the names you give to the inputs that the function wil receive. where arguments are the actual values you pass into the function when you call it.`
`In the example {name}{age} are the parameters of the {greet} function. where we call {greet("alice",25)} alice and 25 are the arguments.`

**==Function Call==**:- `A function call is when you use a function that you have define eariler. for Example:- if i have a function `sayHello` that prints "Hello World!", calling `sayHello()` will executed that funtion and prints the message. If the function has parameters, like`add(a,b)`, you can pass specific value when caling it, like `add(3,4)` to get a result based on those inputs`.
"A functon call is the process of invoking a function that has been defined in a program. when you call a function, you are asking the program to executed the code within that function."

**==ES5 and ES6 Function==**
*ES5 Function is and old javaScript function which has thee types*
==Function statement:  function name(){....}
==function expression:  var a = function(){....}
==anonymous function:  function(){....} //this mostly used in callback function

*ES6 function is an new javaScript function which has also three types*
this function has no name so we saved this on variable
==fat arrow function:  ()=>{....} // saving on variable var name = ()=>{...}

**==STRING IN JAVASCRIPT==**
--`A string in javaScript is a sequence of characters used to represent text. String are enclosed in single quotes(''), double quotes("") or backticks(``) `

//Creating Strings using 3 basiec quotes
let singleQuoteString = 'Hello, world!';
let doubleQuoteString = "Hello, World!";
let templateString = `Hello, World!`;

//Basic String Operations
**Concatenation:- we can concatenate(combine) string using the `+` and `Template literals`
let greeting = "Hello";
let name = "Alice";

//using + operator
let message = greeting + "," + name +"!" ;
console.log(message);

//using template literals
let templateMessage = `${greeting},${name}!`;
console.log(templateMessage);

**Accessing Characters and length property:- we can access individual characters in a string using bracket notation or the {charAt} method where length of a string using {length} property.
let text = "Hello, World!";

//using Bracket notation
console.log(text[5]);

//using charAt method
console.log(text.charAt(12));

//length properties
console.log(text.length);


**==ARRAY==**
=`An array is a special variable that can hold more than one value at a time. It is used to store multiple values in a single variable and these values can be any types(number,string,object etc).`

`An array in javaScript is like a list that can store multiple value in a single variable.you can access these values using their index. for example 'let fruits = ["apple", "banana", "cherry"]; if i have an array of fruits I can get the fruit with 'fruits[0]', which will give me 'apple'.I can add a fruit to the end of the list with 'fruits.push("orange")' and remove the fruits with 'fruits.pop()'. Array make it easy to work wth lists of data.`

==Arrays Helper Methods
-push - used to add any type of data in the array and add to the last index.
-pop -  used too remove any types of data in the array and remove the last added array or last index of array.
-shift- used to remove any type of data from the beginer of the array.
-unshift- used to add and extra value in the starting of the array.
-splice - used to remove any array data from between but we have to give index and how many element reomve should be instructed.

**==OBJECT IN JAVASCRIPT==**
--`An object is a collection of key-value pairs, Each key is called a property and each value can be any DataTypes including another object.`
--`Object are used to store and organize data in a structured way.`
--`for Example think of a person. A person has properties like a name and age and actions they can perform. In the example, {person} has properties 'name' and 'age' and a method 'greet' that prints a greeting. you can access and modify these properties uing dot notation {person.name give 'john' and {person.greet() prints a greeting message}}`
//creating object using curly braces '{}'
let person = {
    name: "john",
    age: 30,
    isStudent: false
};

//Accessing Object Properties using dot notation or bracket notation
console.log(person.name);
console.log(person["age"]);

//Adding or updating properties ones using dot or bracket notation.
person.job = "software development";
person.age = 31;
console.log(person);

//Removing Properties using delete keyword
delete person.isStudent;
console.log(person);

**==METHOD IN JAVASCRIPT==**
-`A method is a function that is a property of an object.Method allow object to perform actions.`
-`Method are used to perform action using the object data`
-`for example let's take a car object where {start}{drive} are the methods which {start} method prints a message when the car started and the {driver} method prints the speed at which car is driving.`

//creating an object with methods
let car = {
    brand: "Toyota",
    model: "corolla,
    year: 2020,
    start: function(){
        console.log("The car has started.");
    },
    drive: function(){
        console.log("the car is driving at ${speed} km/h");
    }
};

//In this example, {car} is an object with propeties {brand}{model}{year}.it also has two method {start},{drive};

//calling and adding using dot notation
for call- car.start();
          car.drive(60);
for adding - 
car.stop = function(){
    console.log("the car has stopped");
};
car.stop();

**==Execution Context==**
`An excution context is an enviroment in which Javacript code is Executed.It consists of three main components`
1)Varaiable Object(VO):- Conatains function argument,inner variable declarartions, and function declaration.
2)Scoped Chain:- References the current and outer lexical enviroment.
3)this Binding:- Refers to the object on which the code is currently being executed.

//Types of Execution Contexts
1)Global Execution Context:
🫳Create when the javaScript fileis first run.
🫳`this` refers to the global object(in browser, it's `window`).

2)Function Execution Contexts:
🫳Creatd when a function is called
🫳Eacg function call get its own Execution context.
🫳`this` depend on how the function is called.

3)Eval Execution Context
🫳Create when code is executed inside an `eval`function.

**==SPREAD OPERATOR==**
`The Spread operator (`...` )in javaScript allows you to expand an iterable (like an array or string) into individual element or to expand an object into key-value pairs.It is useful for copying,merging,or passing elements/values easily.`

<!-- //USAGE IN ARRAY

//1)Copying Arrays
// const originalArray = [1,2,3,4,5];
// const copiedArray = [...originalArray];
// console.log(copiedArray);

// //2)Concatenating Arrays:
// const array1 = [1,2,3];
// const array2 = [4,5,6];
// const concatenatedArray = [...array1,...array2];
// console.log(concatenatedArray);

// //3)Adding Element to an Array:

// const array = [1,2,3];
// const newArray = [0,0, ...array, 4,5,6,7,8,9];
// console.log(newArray);

//USAGE IN OBJECT

//4)Overriding Properties:

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const combinedObject = { ...obj1, ...obj2 };
// console.log(combinedObject); // Output: { a: 1, b: 3, c: 4 } -->

**==Callback Function==**
-`A callback function is a function which is passed as an argument to another function and it will executed after some kind of event or operation occurs.`
-`In simple term callback is a way of telling a function that: "here is another function that you should run after you finish what your're doing."`

<!-- setTimeout(function(){
    console.log("hello we are learning callback function")
},5000) -->

**==Higher order function==**
`A higher order funcction is a function that either takes one or more function as arguments, return a function, or both.In simple term's it's a function that operates on other functions.`
`Here's simple defination A higher order function is a function that can accept function as arguments or return function as output.`
`Higher-order function they allow abstracting and reusing logic. It's enable function programming patterns like map,filter,and reduce, making code more concise and expressive.`
<!-- Syntax as argument
function abcd(val){

}
abcd(function(){})
 -->

<!-- Syntax as argument
function repeat(action, time){
    for(let i=0;i<time;i++){
        action(i)++
    }
}
function greet(index){
    console.log(`hello this is greeting number ${index +1}`);
}

repeat(greet, 3);
 -->

<!-- Syntax as function 
function createMultiplier(factor){
    return function(number){
    return number * factor;
    };
}
const double = createMuliplier(2);
console.log(double(5));
-->

**==IIFE-Immediately invoked function expression==**
`An IIFE(Immediately invoked function expression is a function in javaScript that is executed as soon as it is defined.)`
`How it works 
1) function Expression: Define a function insided parentheses`()`
2) immediate invocation: Append another pair of parenheses `()` to immediately execute the function.`

<!-- ( function(){
//this IIFE syntax
} ) (); -->
*POINT-NOTE* - This IIFE used for private variable and cannot be acces by user.
-For accessing the IIFE varaible we provide them a another method with getter "which used to access the private variable in JS/getter is also a function" in return getter function return

<!-- var ans = (function(){
    var privateValue = 12;

    return { //yeha return object kiya jata hai
        getter: function(){
            console.log(privateValue);
        }
    }
}) (); -->

with the help of setter we can set the val to the private variable

<!-- var ans = (function(){
    var privateValue = 12;

    return { //yeha return object kiya jata hai
        getter: function(){
            console.log(privateValue);
        },
        setter: function(val){
            privateValue = val;
        }
    }
}) (); -->


**==THIS KEYWORD==**
`this keyword is a special keyword in javaScript which changes it's value in different context.`
1)Global Context: Outside of any function or scope the decleartion is done called Global Context which output is window only
Syntax: 
<!-- console.log(this); -->

2)Function Context: Inside a function, `this` refers to the object that calls the function. It can vary based on how the function is called:

->Regular Function: In a regural function, `this` typically refers to the global object(`window` in browsers) 
Syntax:- 
<!-- function abcd(){
    console.log(this);
}
abcd();  -->
If in the function we used `'use strict'` in this case `this` will gives undefined.
SYntax:- 
<!-- 'use strict';
function abcd(){
    console.log(this);
}
abcd(); -->

*=METHOD=* In this method when the function is define inside the obj then it give the object name .
Syntax:- 
<!-- var obj = {
    name: "john",
    age: 23,
    baatKaro: function(){
        console.log(this);
    }
}

obj.baatKaro(); -->

*CONSTRUCTOR FUNCTION*= Here `this` refre to the new object in function which is created with the help of new keyWords.
Syntax:-
<!-- function person(name){
    this.name = name;
}
const john = new person("john");
console.log(john.name); -->

*EVENT-HANDEL* =  In event handlers, this refers to the element that received the event.
ya return krga wo .eventListner se paila value ko
Syntax:
<!-- var button = document.querySelector("button");
button.addEventListener("click", function(){
    console.log(this)
}) --> 

<!-- var button = document.querySelector("button");
button.addEventListener("click", function(){
    this.style.backgroundColor = "red";
    this.style.color = "white";
}) -->

**CALL APPLY BIND**
`agar tumahara pass koi function hai and koi object haii and tum function chalana haii aur by default jo this ki value hai use windows naa rakh kar point karwan haii ksis object ki taraf.`

**Call**
`Call in a javaScript that allow you to call a function with a specified {this} context and individual argumanets provided directly.`
Syntax with example:-
<!-- const person = {
    fullName: function(){
        return this.firstName+ " " + this.lastName;
    }
};

const person1 = {
    firstName: "john",
    lastName: "doe"
}

const person2 = {
    firstName: "jonny",
    lastName: "sinh"
}

// console.log(person.fullName.call(person1));
// console.log(person.fullName.call(person2));

const fullName1 = person.fullName.call(person1);
console.log(fullName1);

const fullName2 = person.fullName.call(person2);
console.log(fullName2); -->

**APPLY**



**DOM(Document Object Model) Manipulation**
-`The process of dynamically changing the content,style or structure of a webpage using javaScript.`
-`The DOM represents the structure of a web page as a tree of nodes, Each nodes can be an element,attribute or piece of text`

*Pillars of DOM*
1)Selection of an Element :- `To Manipulate the DOM, you first need to select the elements(s) you want to change.`
*Selecting/Accessing DOM element*
--Selecting Element by ID
<!-- const element = document.getElementById('myId'); -->
--Selecting Element by ClassName
<!-- const elements = document.getElementsByClassName('myClass'); -->
--Selecting Element by TagName
<!-- const elements = document.getElementsByTagName('div'); -->
--Query Selector (Single Element)
<!-- const element = document.querySelector('.myClass'); -->
--Query Selector All (Multiple Elements)
<!-- const elements = document.querySelectorAll('.myClass'); -->


2)Changing HTML :- `You can change the text or HTML content of Selected elements.`
--Changing Content :- You can Change the text content or HTML content of elements:
<!-- // Changing text content
element.textContent = 'New Text Content';

// Changing HTML content
element.innerHTML = '<strong>New HTML Content</strong>';
 -->

--Changing Attributes :- `You can set,get or remove attributes`
<!-- // Setting an attribute
element.setAttribute('src', 'image.jpg');

// Getting an attribute
const src = element.getAttribute('src');

// Removing an attribute
element.removeAttribute('src');
 -->

3)Changing CSS :- `You can change the CSS style of an element`
<!-- element.style.color = 'red';
element.style.fontSize = '20px';
 -->


4)Event Listener:- `Events are actions or occurrences that happen in the browser. You can respond to event using event listeners.`
--Adding Event Listeners
<!-- const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  alert('Button was clicked!');
});
 -->

--Removing Event Listeners
<!-- const handleClick = () => {
  alert('Button was clicked!');
};

button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);
 -->

5)Creating amd Inserting Elements  :-
--Creating New Elements:- `You can create new elements using document.createElement():`
<!-- const newElement = document.createElement('p');
newElement.textContent = 'This is a new paragraph.';
 -->

--Inserting Elements :- `You can insert elements into the DOM using methods like appendChild(), insertBefore(), replaceChild(), and removeChild()`

<!-- // Appending a new element
document.body.appendChild(newElement);

// Inserting before an existing element
const referenceElement = document.getElementById('reference');
document.body.insertBefore(newElement, referenceElement);

// Replacing an element
const oldElement = document.getElementById('oldElement');
document.body.replaceChild(newElement, oldElement);

// Removing an element
document.body.removeChild(oldElement);
 -->

6)Traversing DOM :- `You can navigate the DOM tree to find elements relative o other elements.`

--Parent Node
<!-- const parent = element.parentNode; -->
--Child Nodes
<!-- const children = element.childNodes; -->
--First and Last Child
<!-- const firstChild = element.firstChild;
const lastChild = element.lastChild;
-->
--Sibling Nodes
<!-- const nextSibling = element.nextSibling;
const previousSibling = element.previousSibling;
 -->

7)Advanced techniques
--Cloning Nodes:- `you can clone elements with `cloneNode` `
<!-- const clone = element.cloneNode(true); // `true` for deep clone (including children)
document.body.appendChild(clone);
 -->

--Delegation:- `Event delegation involves adding a single event listener to a parent element that listens for events on its child elements. This is useful for dynamically added elements`
<!-- document.body.addEventListener('click', (event) => {
  if (event.target.matches('.dynamic-button')) {
    alert('Dynamic button clicked!');
  }
});
 -->


**=Asynchronous JavaScript=**
=`Asynchronous JavaScript which allow you to perform tasks in the background without blocking the main thread.`
=`Which allow you to handle tasks like fetching data, reading files, or performing complex calculation while countinuing to interact with the user.`
*Syntax of Asynchronous*
<!-- setTimeout(function(){
  console.log("This is the second message it will display 2nd");
},3000) -->

*we can identify the async code with the help of this*
`setTimeout`
`setInterval`
`promises`
`fetch`
`axios`
`XMLHttpRequest`

**Event loop**
`The event loop in javaScript is a system that handel asynchronous operation.It allows JavaScript to perform tasks like fetching data from a server or waiting for user input without stopping other code from running.It continuously checks for tasks to complete and runs them when ready,making sure the code runs smoothly without waiting.`
*Syntax*
<!-- console.log('Start cooking'); // Synchronous task

setTimeout(() => { // Asynchronous task
    console.log('Steak is ready');
}, 1000);

console.log('Prepare salad'); // Synchronous task

// Output:
// Start cooking
// Prepare salad
// Steak is ready (after 1 second)
 -->

***PROMISE IN JAVASCRIPT***
`Promises in javaScript are a way to handele asynchronous operations more gracefully. They allow you to write code that can handle resolve and reject cases in a cleaner and more manageable ways.`

*States of a Promise*
-Resolve: `The Operation completed successfully`
-Reject: `The operation faild`
-Pending: `The initial state,neither fulfilled nor rejected.`

*Syntax as example*
<!-- // var ans = new Promise((reslove , reject)=>{
//     if(true){
//       return reslove();
//     }
//     else{
//       return reject();
//     }
// })

// ans
// .then(function(){console.log("Hurrey resolve hogya haii !!!😇😇")})
// .catch(function(){console.log("Reject ho gya guyss!!🥲🥲")})

// var ans = new Promise((resolve, reject)=>{
//     var num = Math.floor(Math.random()*10);

//     if(num < 5){
//       return resolve()
//     }
//     else{
//       return reject()
//     }
// })

// ans 
// .then(function(){console.log("below")})
// .catch(function(){console.log("above")}) -->

*Handeling Asynchronous operations with Promises*
`like fetching data from an API (simulated with setTimeout).`

*Syntax as example*

<!-- function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let sucess = true;

            if(sucess){
                return resolve();
            }
            else{
                return reject()
            }
        },2000)
    })
}

fetchData()
.then(function(){
    console.log("Data fetching sucessfull");
})
.catch(function(){
    console.log("Fetching data is error.....")
})

console.log("Fetching data ....."); -->

*chain form example one by one*
<!-- var ans = new Promise((resolve, reject)=>{
    return resolve("sabse paila ghar per aawo");
})

var p2 = ans.then(function(data){
  console.log(data);
  return new Promise((resolve, reject)=>{
      return resolve("Gate kholo aur get lagwo");
  })
})

var p3 = p2.then(function(data){
  console.log(data)
  return new Promise((resolve, reject)=>{
    return resolve("Khana pakwo and kahan kahow");
  })
})

var p4 = p3.then(function(data){
  console.log(data)
  return new Promise((resolve, reject)=>{
    return resolve("incogito mode on kro")
  })
})

var p5 = p4.then(function(data){
 console.log(data)
 return new Promise((resolve, reject)=>{
   return resolve("sona jwo ab hogya kaam and dekhliya")
 })
})

p5.then(function(data){
  console.log(data)
}) -->


**async and await in javaScript**
`async:- The {async} keyword is used to decleare an asynchronous function. This function returns a promise implicitly, making it easier to work with asynchronous code using a synchronous-like syntax`
*Syntax*
<!-- async function fetchData() {
    return "Data fetched successfully!";
}
 -->

`await:- The {await} keyword is used inside an {async} function to pause execution until the promise is resolved. It makes the code wait for the promise to settle and then resumes execution with the resolved value`
*Syntax*
<!-- async function getData() {
    const result = await fetchData();
    console.log(result);
}

getData();
 -->

*Example*
<!-- // //async and await

// async function abcd() {
//     let raw =  await fetch(`https://randomuser.me/api/`)
//     let data = await raw.json();
//     console.log(data);
// }

// abcd(); -->

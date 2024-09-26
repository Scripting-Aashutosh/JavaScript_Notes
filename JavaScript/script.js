//Question 1
//user se maango ek number and agar 
//number 10 se jaada ho to hello print karo nahito hey print kro


//to ask user for any input there is prompt in js

// var num = prompt("enter number:");

// if(num >10) {
//     console.log("hello");
// }
// else{
//     console.log("hey");
// }

//Question 2
//user se number maango and usmein 10 add kardo  and 
//agar wo 10 add karna par 20 se jaada ho jaaye 
//to bolna hello nahito bolo hey

// var num = prompt("enter number");

//prompt se kuchh bhi lena per humasa aapko ek string hi milagi 
//aap kuchh bhi input karaaye prompt usha string bana deta hai

// var newnum = Number(num); //the way to convert string  into number

// if(newnum > 20){
//     console.log("hello");
// }
// else{
//     console.log("hey");
// }

//Question 3
//User se number maango do baar and dono ko add kro 
//and agar dusre number ki akhri digits us added number se chotti hai to 
//Print kro hello

//var num = Number(prompt("Enter a number:"));
//var num2 = Number(prompt("Enter a another number:"));
//we can do in a single line also

// var num = prompt("enter a number:");
// num = Number(num);

// var num2 = prompt("enter a another number:");
// num2 = Number(num2);

// var add = num + num2;

// if(num2 %10 < add){
//     console.log("hello");
// }
// else{
//     console.log("hey");
// }

//Question 4
//user se do password maango agar match kar hay to login kro nhi to mana krdo

// var pass1 = prompt("enter password1: ");
// var pass2  = prompt("enter password2: ");

// if(pass1 === pass2){
//     console.log("login allowed");
// }else{
//     console.log("not allowed");
// }

//Question 5
//wap to cheek the number is even or odd

// var num = prompt("enter a number: ");
//num = Number(num);

// if(num%2===0){
//     console.log("even number");
// }
// else{
//     console.log("odd number");
// }


//Question 6
//if else else if question

// var num = prompt("enter a number: ");
// num = Number(num);

// if(num > 100){
//     console.log("Badhiya.....");
// }
// else if(num > 80){
//     console.log("kaafi aacha hai....");
// }
// else if(num > 50){
//     console.log("good.....");
// }
// else{
//     console.log("bekar .....");
// }

// ======================Loop=================================
//forEach 
// var arr = [1,2,3,4,5,6];

// arr.forEach(function(val){
//     console.log(val);
// })

//map

// var arr = [1,2,3,4,5,6,7];

// var ans = arr.map(function(val){
//     return val+2; //[3,4,5,6,7,8,9]
// })

//filter

// var arr = [1,2,3,67,4,6,45,87,48,42,44,89,3,6,0,4];

// var ans = arr.filter(function(val){
//     //retuen kuch yesa likhna haii ki wo true or false mai convert hojya bas

//     return val > 8; //[67,45,87,48,42,44,89];
// })

// Array.reduce
// const arr = [1,2,3,4,5,6,7,8,9,5];

// const ans = arr.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue;
// },0)

// console.log(ans);

//Object example basic
// var obj = {
//     user: "Aashu",
//     age: 23,
//     surname: "Gupta",
//     isSingle: true
// }

// var obj1 = {
//     user: "Happy",
//     age: 21,
//     isSingle: true,
//     college: "LNCT"
// }

// var obj2 = {
//     user: "vishal",
//     age: 24,
//     isSingle: false,
//     college: "JNCT"
// }

// console.log()

// var user = {
//     name: "Aashu",
//     age: 23,
//     sayName: function(){
//         console.log("hey aashu !!")
//     }
// }
// console.log()
// user.sayName()


//Question WAP to print area of triangle
// var breadth = prompt("enter the breadth: ");
// var height = prompt("enter an height: ");
// breadth = Number(breadth);
// height = Number(height);
// var area = 1/2*(breadth * height);
// console.log("the area of triangle: " +area);

//==HOISTING
// a();
// b();

// function a(){
//     var x = 10;
//     console.log(x);
// }

// function b(){
//     var x =100;
//     console.log(x)
// }

// var x = 1;
// a();
// b();
// console.log(x);

// function a(){
//     var x =10;
//     console.log(x);
// }

// function b(){
//     var x =100;
//     console.log(x)
// }


//function topic
// function abcd(a){ //(parameter)= parameter are variable listed as part of a function defination,
//                  //they act as a placeholder for the value that will be passed into the function.
//     console.log(a);
// }
// abcd(12); //(arguments)= Argument are the actual value that are pased to the function when it is called.


// var a ={
//     name: "mouse",
//     age: 20,
//     email: "mouse123@gmail.com",
//     number: 8977698876,
//     surname: "mini"
// }
// console.log(a.email);
// a.age = 30;
// console.log(a.age);

//USAGE IN ARRAY

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
// console.log(combinedObject); // Output: { a: 1, b: 3, c: 4 }


//for in loop 
// const person={
//     name: "john",
//     age: 30,
//     city: "New York"
// };
// for(let key in person){
//     console.log(key + ":" +person[key]);
// }


//callback function

// setTimeout(function(){
//     console.log("hello we are learning callback function")
// },5000)

//firt class function

// function abcd(a){
//     a();
// }
// abcd(function(){console.log("hello")});

// function sachaaOfBiscuite(){
//     this.width= 12,
//     this.height= 22;
//     this.color= "Brown",
//     this.tast= "sweety"
// }

// var bis1 = new sachaaOfBiscuite();
// var bis2 = new sachaaOfBiscuite();
// var bis3 = new sachaaOfBiscuite();

// console.log(bis1,bis2,bis3);

// var ans = (function(){
//     var privateValue = 12;

//     return { //yeha return object kiya jata hai
//         getter: function(){
//             console.log(privateValue);
//         },
//         setter: function(val){
//             privateValue = val;
//         }
//     }
// }) ();


// var button = document.querySelector("button");
// button.addEventListener("click", function(){
//     console.log(this)
// })

// ===DOM==============
//Selection/changing HTMl/changing CSS/ Event Listener
// var a = document.querySelector("h1")
// a.innerHTML = "huihuihuihuihui"

// a.style.backgroundColor = "Grey";
// a.style.color = "black";

// a.addEventListener("click", () => {
//     console.log("Click hu haii guys!!!")
//     a.innerHTML = "Hey! wellcome to DOM Manipulation"
//     a.style.color= "white"
//     a.style.backgroundColor= "black"
// })


// const bulb = document.querySelector("#bulb");

// var flag = 0;

// bulb.addEventListener("click", function(){
//     if(flag == 0){
//         bulb.style.backgroundColor= "yellow";
//         console.log("clicked")
//         flag = 1;
//     } else{
//         bulb.style.backgroundColor= "transparent";
//         console.log("Again" )
//         flag = 0;
//     }
// })


 
// console.log("Start");

// setTimeout(() => {
//   console.log("This message is displayed after 2 seconds");
// }, 5000);

// console.log("End");

// console.log("This is the first message it will display 1st");

// setTimeout(function(){
//   console.log("This is the second message it will display 2nd");
// },3000)

// console.log("This is the third message it will display 3rd");


// Promise

// var ans = new Promise((reslove , reject)=>{
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
// .catch(function(){console.log("above")})

//API

// function fetchData(){
//   return new Promise((resolve, reject)=>{
//       setTimeout(()=>{
//           let sucess = true;

//           if(sucess){
//               return resolve();
//           }
//           else{
//               return reject();
//           }
//       },2000)
//   })
// }

// fetchData()
// .then(function(){
//   console.log("Data fetching sucessfull");
// })
// .catch(function(){
//   console.log("Fetching data is error.....")
// })

// console.log("Fetching data .....");

// var ans = new Promise((resolve, reject)=>{
//     return resolve("sabse paila ghar per aawo");
// })

// var p2 = ans.then(function(data){
//   console.log(data);
//   return new Promise((resolve, reject)=>{
//       return resolve("Gate kholo aur get lagwo");
//   })
// })

// var p3 = p2.then(function(data){
//   console.log(data)
//   return new Promise((resolve, reject)=>{
//     return resolve("Khana pakwo and kahan kahow");
//   })
// })

// var p4 = p3.then(function(data){
//   console.log(data)
//   return new Promise((resolve, reject)=>{
//     return resolve("incogito mode on kro")
//   })
// })

// var p5 = p4.then(function(data){
//  console.log(data)
//  return new Promise((resolve, reject)=>{
//    return resolve("sona jwo ab hogya kaam and dekhliya")
//  })
// })

// p5.then(function(data){
//   console.log(data)
// })


// //async and await

// async function abcd() {
//     let raw =  await fetch(`https://randomuser.me/api/`)
//     let data = await raw.json();
//     console.log(data);
// }

// abcd();



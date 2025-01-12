//?  Let & Const

//!Let-KeyWord--:)

//* The let keyword is used to declear variables with block scope.variables decleared with let are mutables ,meaning their values can be reassigned..... 
// ex:-
if(true){
    let name="Nikhil";
    console.log(name);
    }
    name="Pandey";
    console.log(name);
    

//! Const Keyword--:)

 //*--> The const keyword are used to declear variables with block of scope ,but once the value is assigned to a const variables ,it can not be reassigned .const variables are immutable..... 

 if(true){
    var name="Nikhil";
    console.log(name);
    }
    name="Pandey";
    console.log(name);




//!--Template Strings---:)

//*--   In Es6 ,template strings,also known as template literals ,provide a convenient and flexible way to create  strings in java Script. Template strings are enclosed is backtick(``) rather than single or double quotes...:)
let firstname=`Nikhil`;
let lastName=`Pandey`;
// let fullName=firstname+lastName;
let fullName=`${firstname} ${lastName}`;
console.log(fullName);


//!-->  String Interpolation: Template string supports string interpolations,allowing you to embed expressions directluy within the string .Interpolated expressions are enclose in ${}....:)

let age= 24;
let message=`I am ${age} year old`;
console.log(message);


let multilineString=`
This is a multi-line
string using template literals.
It's much easier to write multi-line Strings.
`;
console.log(multilineString);

let num=5;
// console.log(" 5 * " + num + " = " + 5 * num) ; Instead of writting like this we can write it like...
 
console.log(`5 * ${num} = ${5* num}`);


//!--> Default Parameters-->

//*In ES6 default parameters were introduces,providing  more concise way to handle fuction parameter defaults. Default parameters allow you to specify default values for function parameters in the functon declearation itself .If a parameter is not provided when the function is calledd ,yhe default value is used...age..:)

//* Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed
//? WAF to find sum of two numbers ? what if during function call user only passed one argument..???

function sum(a=4,b=15){  //b=15 is default value of b
    return a+b;
}
console.log(sum(5,25));  //Here we are passing value to b in that case  b=25



//! ----->FAT ARROW FUNCTION<-------------***
//* In ES6 arrow functions ,also knnown as fat arrow functions,were introduced as a coscise way to write anonymouse functions.

const sumOfNum=function(a,b){
    let result=`The sum of ${a} and ${b} is ${a+b}`;
    console.log(result);
    
}
sumOfNum(5,55);

//Fat Arrow 

const sumNum=(firstNum,secondNum)=>{
    let result=`The sum of ${a} and ${b} is ${a+b}`;
    console.log(result);
    
}
sumOfNum(5,40);

//Also write it like ---

const sumNum1=(firstNum,secondNum)=>console.log(`The sum of ${firstNum} and ${secondNum} is ${firstNum+secondNum}`);
sumNum1(5,30);



//! TODO NOTES

//? 1: If the function body consists of single expression , the braces{ } and the keyword can be ommited.

const sum2=(a,b)=>`The sum of ${a} and ${b} is :- ${a+b}`
console.log(sum2(5,5));

//?  2. If there is only one parameter ,the parentheses() around the parameter list can be omitted

const square=a=>`The square of ${a} is ${a*a}`
console.log(square(5));


//? 3: If there is not parameter ,us e an empty set of parantheses;

const greet=()=>console.log("Hi How are you...! -:)");
greet();

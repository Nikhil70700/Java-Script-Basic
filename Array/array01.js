                  //*ARRAYS IN JAVA SCRIPT

//! Iterable:-> Object where you can use the for-of loop..

//!Array-like object :-> Any object with length property and use index to access items.

//!   Array as Objects:-> Array in JS are a specific  type of object that has numaric keys(indices) and a length property .The indices are automatically maintained ,and the length prooprty is automatically updated when you add or remove elements from the array.


//! Type of operator:-> The typeOf operator is JS returns "objec  ts" for both arraysand regular objects.


//? Arrays in JAva Script can be created using Array cunstructor or with array literals(Square brackets[]).

//? Using Array Constructor:

let fruits=new Array("apple","orange","Banana");
console.log(fruits);


//!Using Array Literals...***
let fruit=[ 'apple', 'orange', 'Banana' ];
console.log(fruit);

//!Accessing Elements:-
let eleFruits=[ 'apple', 'orange', 'Banana' ];
console.log(eleFruits[2]);

//!  Modifying Elements:

let ModifyFruits=[ 'apple', 'orange', 'Banana' ];
ModifyFruits[2]="Guava";
console.log(ModifyFruits);


//! Array Iteration/Traversal In Arrays


//?-1: For of loop, also known as iterable;

//* for...of Loop: The for..of Loop is used to iterate over the values of an iterable objects,such as arrays ,strings,or other iterable objects.

let Fruits=["Apple","Banana","Guava","Mango","Orange"];
 for(let item of Fruits){
    console.log(item);
    
 }

 //!For in Loop ...
 //?for...in loop is used to iterate over the properties(including indices)of an object.

 let thefruits=["Apple","Banana","Guava","Mango","Orange"];
 for(let prod in Fruits){   //(in represents index)
    console.log(prod);
    
 }


 //! forEach Method.....

 //* The arr.foeEach() method calls the provided function once for each element of a array.The provided function ,any perform any kind of operation on the element  of the given array.

//  let thesefruits=["Apple","Banana","Guava","Mango","Orange"];
//  thesefruits.forEach(function
//    callback(currentValue,index,array){
//       //Your logic here
//    },thisValue );

  //? Ex :-

//   let forFruits=["Apple","Banana","Guava","Mango","Orange"];
//   forFruits.forEach((currElem,index,arr)=>{


//    console.log(`${currElem} ${index}`);
//    console.log(arr);
   
   

//   });



  //! Map Function----
  //* map() creates a new array from calling a funnction for every array element .map() does not change the orignal array.

let fru=["=Apple","=Banana","=Guava","=Mango","=Orange"];
fru.map((currElem,index,arr)=>{
console.log(currElem);

})


//!TODO Practice Time(Multiply each elem by 2)

let number=[1,2,3,4,5,6,7];
number.forEach((currElem)=>{  ///Perform action on Each Elem (forEach)
   console.log(currElem*2);
   
})

const mulElem=number.map((currElem)=>{
   return currElem*2;
})
console.log(mulElem);



//!KEY DIFFERENCES 

//! Return Value:
//? forEach:- It doesn't return a value .The forEach method is used for iterating over the elements of an array and performing a side effect ,such as modifying the array or performing a task for each element.

//? Map :- It returns a new array containing the results of applying a function to each element in the orignal array.The orignal array remains unchanged 


//!Chaining 

//? :forEach loop :- It doesn't return value ,so it cannot be directly chained with other array methods.

//? Map :- Since it returns a new array ,you can chain array methods after using map.

//! Use cases;-->

//? FOrEach --> Used when you want to iterate over the array elements and perform as action on each elements,but you don't need a new array

//?  Map :-->  Used when you want to create a new array based on the transformation of each element in the orignal array.


//* How to Add Insert Replace and delete elements in array...
//!Push ..........

let per=["Sits","Gita","Ramesh"];
per.push("Mahesh","Santanu");
console.log(per);

//!pop()---
per.pop();
console.log(per);

//!Unshift---

per.unshift("Nikhil");
console.log(per)


//!Shift....
per.shift();
console.log(per);

//! ** Splice()--->>>

let Persons=["Nikhil","Buchi","Mayank","Deepak"];

// syntax:-
// splice(start,deleteCount,item1,item2,item3...item n)

// (Persons.splice(1,3)); 
// (Persons.splice(0,3,"Grapes"))
(Persons.splice(Persons.length,0,"Nikhil"));

console.log(Persons);


console.log("Ended Here");



//!-----------Searching and Filter In an Array------------------>

//!indexOf Method

const names=["Ram","Harish","Sita","Vishal","Gita","Suraj","Gita","Sita","Ram","Harish","Sita","Vishal"];

console.log(names.indexOf("Sita",3));
//->--------searching direction------------>>>
//!Includes...
console.log(names.includes("Harish",0));

//!lastIndexOf Method......
console.log(names.lastIndexOf("Sita"));
//   <----------searching direction----------<


//!TODO Challenge ------------?????????
//?Add Dec at the End of An Array

const months=["jan","march","April","June","July"];
months.splice(months.length,0,"Dec");
console.log(months);
//*The return Value of splice method is []

//?Update march as March.....??


 const updatedMonth=months.indexOf("march")
 months.splice(updatedMonth,1,"March")
 console.log(months);


 //? Delete june from An Array
 const updatedJune=months.indexOf("June");
 months.splice(updatedJune,1);
console.log(months);


//!---->>>FILTER IN ARRAY<<<-----------------

//? find Method:- The find method is used to find the first element in an array that satisfies a testing function.It returns .It returns the first matching element or undefined if no element is found.

//?syntx:- same as map 


// const arrt=[12,11,14,15,16,18,79,40];
// const results=arrt.find((currElem)=>{
//     return currElem>16;
// });

// console.log(results);



//? 2:- findindex method:-  The findIndex()of typed Array instances returns the index of the first element in a typed array that satisfies the provided testing function.If no elements satisfy the testing function. -1 is returned.....

//!-ex:-
const arrt=[12,11,14,15,16,18,79,40];
const results=arrt.findIndex((currElem)=>{
    return currElem>16;
});

console.log(results);

//!--Filter():-->
//?The filter() method creates a new array with all elements that pass the test implemented by the provided function.

 const numbering=[1,2,3,4,5,6,7,8,9];
 const result=numbering.filter((currElem)=>{
   return currElem>5;

 });
 console.log(result);
 

console.log("Ended");

 //!   ?   TODO  ?-----

 //? let's say user wants to delete value 6

 let value=6;
 const numbered=[1,2,3,4,6,5,6,7,8,9];
 let updatedCart=numbered.filter((currElem)=>{
   return currElem !== value;

 });
 console.log(updatedCart);


 //!  Filttering Product by Price   :--->
 //? Given an array of products where each product has a name and a privce, write a funnction that uses the filter method to return an array containing i=only the products with a price less than oer equal to 500.:}


 const products=[
   {name:"Laptop",price:1200},
   {name:"Phone",price:800},
   {name:"Tablet",price:300},
   {name:"Smartwatch",price:150},
 ];

 const filterProduct=products.filter((currElem)=>{
   return(currElem.price<=500)

 });
 console.log(filterProduct);

 //!   -- FInd the Unique value

 const givenNumber=[1,2,3,4,5,6,6,7,8,9,];
 let unniqueValue=givenNumber.filter((currElem,index,arr)=>{
   return arr.indexOf(currElem)===index;


 })


 console.log(unniqueValue); 


// console.log(currElem,"curval");
// console.log(index ,"index");
// })
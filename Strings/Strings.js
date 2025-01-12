//!---> Strings In JAva Script

//? String in JS are fundamental data type that represents the sequence of data type

//!....Note-->
//? Strings in ja are created with the  help  of single '' or double "" quotes.

//?There is no difference between both of them.

//!--->   Strings Properties--
//? length:- property that returns the length of the strings(number of characters).

//!Ex:-- 
     const str="Hello World";
     console.log(str.length);
     //Output:-11

     
//! **** Escape Character:--- >

// In java script the backslace \ is used as escape character .it allows yoou tp include special character is a string.

let text="My Name is Nikhil Pandey & I am a full stack developer.";
let text1='My Name is "Nikhil Pandey" & I am a full stack developer';
let text2="My Name is 'Nikhil Pandey' & I am a full stack developer";

//!or

let text4="My name is 'Nikhil PAndey' & \n (for new line)I am a \"Full Stack \" Developer.";
console.log(text4);



//!   Index OF():-->

// The index of () methos returns the index(position) of the first occurence of a string in a string ,or it returns -1 if the string is not found.

//Synts: indexOf(searchingStrings ,Position)
 let name="NikhilPandey";

 console.log(name.indexOf("nikhil")); //print -1 bc uz indexof()it is case sensitive
 console.log(name.indexOf("Pandey"));
 

 //!---Array.from()-->

//  the Array.from() method returns an array from any object with a length property.

//  ex: 
   let name2="NikhilPandey";
   let strArr=Array.from(name2);
//    console.log(strArr);

   let strMap=strArr.map((curELem,index)=>`${curELem} - ${index}`)
   console.log(strMap);
   


   //!lastIndexOf()--->

   //?The lastIndexOf() returns the index of the last occurence of a specified text in a string:


   //Syntax:
   // string.lastIndexOf(searchvalue,fromindex);

//    let MyIndex="Hello JavaScript, Hello JavaScript,Hello Java Scriipt";
//    let index=MyIndex.lastIndexOf(("JavaScript"));
//    let index8=MyIndex.lastIndexOf(("JavaScript"),10);
//    console.log(index8)
   

//!search()-->
// The search() method searches the string for a specified value and returns the index of the first match

let texts="Hey there This is JavaScript, Welcome to JavaScript";

let result=texts.search("JavaScript")
console.log(result);
//!  Important Tips
//! - The search() method cannot take a second start position argument.
//! - The ondexOf() method can not take powerful search values (regular expressions).
//!  - They accept the same argument (parameters) ,and return the same value.

//!---------------------------------------------------------------

//!match()--->
//Returns an array of the matched values or null if no match is found.

let mytxt="Hello JavaScript, welcome to our world best JavaScript course";
let res=mytxt.match("JavaScript");
let res1=mytxt.match(/JavaScript/g);
//!todo here the js converts the normal text into regular expression text.match(/JavaScript/);without the g flag
console.log(res1);



//!  ? matchAll() : Returns an iterator of all matches, providing detailed information about each match. Returns an empty iterator

let txt="hello JavaScript ,Welcome to JavaScript Course"
let matchResults=txt.matchAll("Javascript");
let matchResult=txt.matchAll("JavaScript");
//todo here the js converts the normal string innto regular expression text.match(/JavaScript/g); also addds the g flag at the end
console.log(matchResult);



//!includes():->Return if the string contains the specified value and false otherwise.(It is case Sensetive)


// Ex:->
 let Xtext="Hello welcome to my JavaScript Course Learn JvaScript Here" 
 let includeResults=Xtext.includes("Script");
 console.log(includeResults);


 //!startWith():-The startWith() method returns  if a string begins with specified value .Otherwise it returns false.

 let thisText="Hey buddy How are You";
//  let myBeginingText=thisText.startsWith("buddy");
let myBeginingText=thisText.startsWith("Hey");
 console.log(myBeginingText);


 //* start position for the search can be specified

 let yourBegin=thisText.startsWith("Hey",0)
 console.log(yourBegin,"ka");


 //!endsWith():- The endWith() method returns true if a string ends with the specified value, otherwise false.

 let myLastText=thisText.endsWith("You");
 console.log(myLastText);





 
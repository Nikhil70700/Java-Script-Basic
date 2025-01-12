//!slice()
// let text="Hey There i am Nikhil Kumar Pandey";

// let result=text.slice(6);//slice(startIdx)
// let result=text.slice(-6);//Searching backword:
// let result=text.slice(1,6); //slice(startIdx,endIdx)

// console.log(result);

//!substring();

// let resul1=text.substring(1,6);
// console.log(resul1);

//!------->NOTE<--------                                substring() is similar to slice().The difference is that start and end values less that 0 are treated as 0 in substring.

// let text="Hey There i am Nikhil Kumar Pandey";
// let result3=text.substring(-6);
// console.log(result3);


//!Home Work:

let MyTxt="Are bhai kaise hai tu";
// let res=MyTxt.substring(0);
// let res=MyTxt.substring(1);
let res=MyTxt.substring(-5);
console.log(res);



//todo In both the slice() and substring() methods,the end parameter indices the ending index up to which the wxtraction occurs ,but the character at the end index  is excluded from the extracted substring.

//!replace()/replaceAll():->

let texts="Hello JavaScript, welcome to our world best JavaScript course"
//  let  rest=texts.replace("JavaScript","Nikhil");
let rest=texts.replaceAll("JavaScript","Nikhil Pandey")
 console.log(rest);




 //!/**................................................................................................. */


// ? charAt()  :-

//* The charAt() method returns the character at a specified index (position) in a string.

// let MynTxt="Hello JAvaScrip This is my JavaScript Practice";

// let resuts=texts.charAt(6);
// console.log(resuts);


//? charCodeAt():--->>

//* The chatCodeAt() method returns the code of the character at a specified index in a string .The method returns a UTF-16 code(an integer between 0 and 65535);

let MynTxt="Hello JAvaScrip This is my JavaScript Practice";

let resuts=texts.charCodeAt(6);
console.log(resuts);


//todo ES2022 introduces the string method at():->

//? The at() method returns the character at a specified index (position) in a string . The at() method returns the same as carAt().

let text="Hello Nikhil ,Welcome to Java Script Practice";

// let result =text.at(6);
let result =text.at(-6);
console.log(result);

//!Note:-
// The at() method is a new addition to java script.
//It allows the use of negative white charAt() do not.
//Now you can use myString.at(-2) instead of charAt(myString.length-2).



//*================================
//*Replacing String Content:
//*================================
//! Replacing String content:
//Replace():
//The replace method is used to replace a specified value with another value.

const str="Hello,Nikhil!";
const newString=str.replace("Nikhil","NikhilPandey");
console.log(newString);

//? Case-Insensitive replacement :--->>
// To perform a case-insensetive replacement,you can use the i flag in the regular expression.

let orignalString="Hello world, How are You World!";
let newStrings=orignalString.replace(/world/gi,"Nikhil");
console.log(newStrings);


//! Other UseFul Methods:-

//? toUpperCase and toLowerCase :converts the string to uppercase or lowercase.

const strn="javastript"
console.log(strn.toUpperCase());
console.log(strn.toLowerCase());

//!trim:- Removes whitespace from the beginning and end of a string.

const strg="    Hello,Nikhil!     ";
console.log(strg.length);

console.log(strg.trim().length);



//!split: Split the string into an array of subString based on a specified delimiter.

const meraString="apple,banana,orange";
const fruits=meraString.split(","); //It converts string into array
console.log(fruits.reverse());
console.log(fruits.join());  //COnverts array into String






//!  Write a java Script fuction that prints the letter 'a' through 'z' in the console.YOu should use a loop to iterate through  the letters and print each on a new line.



// console.log("a".charCodeAt(0));
// console.log("z".charCodeAt(0));
//  for(let char=97;char<=122;char++){
//     console.log(String.fromCharCode(char));
//  }



 //!  Write a function to count the number of vowels in a given string.

 const countVowels = (str) => {
    const vowels = "aeiou";
    let count =0;
    for (let char of str) {
        // console.log(str.includes(char));
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
};

console.log(countVowels("My Name  a e i o  is Nikhil Pandey"))


 //! Write a function to check if all the vowels prensent  in a string or not 
const checkAllVowelsPrensentOrNot = (str) => {
    const vowels = "aeiou";
    for (let char of vowels) {
        // console.log(str.includes(char));
        if (!str.includes(char)) {
            return false;
        }
    }
    return true;
};

console.log(checkAllVowelsPrensentOrNot("My Name  a e i o u is Nikhil Pandey"))


//! White a JavaScript Function to check if the given string is pangram, or not ?


const checkPangram = (str) => {
    // Convert to lowercase and split into individual characters
    let inputArr = str.toLowerCase().split("");
    
    // Filter to include only alphabetic characters
    const alphabeticChars = inputArr.filter(
        (curElem) => curElem >= "a" && curElem <= "z"
    );
    
    // Create a Set of alphabetic characters to remove duplicates
    const uniqueChars = new Set(alphabeticChars);
    
    // Check if the Set contains all 26 letters of the alphabet
    return uniqueChars.size === 26;
};

console.log(checkPangram("The quick brown fox jumps over the lazy dog")); // true
console.log(checkPangram("Hello world!")); // false

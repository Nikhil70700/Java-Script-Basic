//! . Question 1: Calculator Function

// Write a JavaScript function calculatpr that takes two numbers and    an operator as parameters and return the result of the operation.the function support additiona,substraction,Multiplications and Division.


const calculator=(num1,num2,operator)=>{
    let result;
        switch(operator){
        case "+":
           return num1+num2;
            break;
            case "-":
                return num1-num2;
            break;
            case "*":
                return num1*num2;
             break;
             case "/":
                if(num2===0){
                    return "Can't devide with 0"
                }else{
                }
                return  num1/num2;
                break;
                default:
                return "no operator found";



    }
}

console.log( calculator(10,2,"/"));

console.log("next");


//!Reverse a String

//? 2. Write a function to reverse a given string without using built-in reverse  method;

const isReverse=(str)=>{
    let reverse="";
    for(let char=str.length-1;char>=0;char--){
        reverse=reverse+(str[char]);
        
    }
    return reverse;

};
 console.log(isReverse("NikhilPandey"));


 //! --> Palindrom Check:)

 //? Create a function to determine if a given string is a palindrom (reads the same backward as forward)

 const checkPalindrom=(str)=>{
    let palindrom="";
    for(let char=str.length-1;char>=0;char--){
        palindrom=palindrom+(str[char]);

    }
     return str===palindrom ? true :false;
 };

 console.log(checkPalindrom("nikhil"));
 
function greet(name){
    console.log("Hello " + name + ", Welcome to My website");
    
}

greet("Nikhil");
greet("Mayank");
greet("Deepak");


//!  Function expression--:)
// ? A function expression is a way to define a function as part of an expression .It can be either named or anonymous .If it's named ,it becomes a named function expresion :)

     //* Ex:- 
                var result=function sum(a,b){
                console.log(a+b);
    
                }
                
                result(3,5);

//!Anonymous Function--:)                

//? An anonymous function is a function without a name .It can be created using either aa function expression or a function declearation withou a specified name....:)

//*ex:-
           var res=function(a,b){
            console.log(a*b);
           }
            res(2,2);



//! IIFE-(Immediately invoked function expression)--:)

//? An IIFE  is a javascript function that is defined and executed immediately after its creation.It is a way to create a self-contained block of code that doesn't interfere with the surrounding code and executes immediately...:)
//*Ex:


    //  var result=function sum(a,b){
    //  console.log(a+b);
    //  }    
    //  result(3,5); instead of writting like this we can write it like this In IIFE

      var ress= (function(a,b){
       console.log(a+b);

       return a+b;
        
      })(5,10);
      console.log("Result = " +" " + ress);


      
        
        
        

           
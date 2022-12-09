var temprature=prompt(" enter temprator toady");
temprature>=30?alert("hot"):alert("cold");
// function name(params) {
//     var name=prompt("enter your name");

// isNaN(name)?alelrt("hello ",name):alert("enter your name");
// if (isNaN(name)?alelrt("hello ",name):alert("enter your name"))
//  {
// for (let  i= 0;  i<=1;i++) {
//     prompt("enter your name")
    
// }
//     alert("error");
    
   
//  }

// }

// var age=prompt("enter your age");
// // isNaN(age)?alert("enter your age"):alert("your age");

// if (isNaN(age))
//  {
// for (let  i= 0;  i<=1;i++) {
//     prompt("enter your age")
    
// }
//     alert("error");
    
   
//  }
// if(age>2010){
//     for (let i = 0; i < 3; i++) {
//         prompt("enter your age")
        
//     }
// }
// function name(params) {
    
// }


var count = 0;

do
{
    // take name from user and check if it's a string
    var Name = prompt("Enter your name");
}while(isFinite(Name))

do
{
    count++ ;
    // take birth year from user and check if it's a number 
    var birthyear = prompt("Enter your birth year");
    if(birthyear<2010)
    {
        var Age = 2022 - birthyear;
        count = 4;
    }

}while(count<3 && (isNaN(birthyear) || birthyear>=2010))

document.write("<u>  Name:</u> ",Name , "<br>");
if(birthyear <2010 )
{
    document.write("<u> Birth Year:</u> ",birthyear , "<br>");
    document.write("<u> Age:</u> ",Age , "<br>");
}
else
{
    document.write("Invalid year");
}

num1 = prompt("Enter first number");
num2 = prompt("Enter second number");

// sum of last digits of the numbers 
// if num1 = 12  , num2= 13  --> sum = 2+3 = 5 

lastDigit1 = num1 % 10 ;
lastDigit2 = num2 % 10 ;

sum = lastDigit1 + lastDigit2 ;
console.log("sum= " , sum);
distance =prompt("Enter distance between the cars");
time = distance * 2;
console.log("Time in Minutes" , time);
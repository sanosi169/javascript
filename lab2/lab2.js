////////////////////task1///////////////

// var num;
// var arr=[];
// var i =0
// while(i<3){
// i++
// num =parseInt(prompt("enter number "+i))
// arr.push(num);

// }
// function sumArr(arr)
// {
//     var sum=0;
//     for(var i=0;i<arr.length;i++)
//     {  
//         sum=arr[i]+sum;
//     }
//     return sum;
// }

// var total=sumArr(arr);
// console.log(total)



////////////////////task2////////////////////

// var number =prompt("enter number ");
// var rev= number.split('').reverse().join('');
// console.log(rev);


/////////////////task3//////////////////////

// var number =prompt("enter number ");
// var rev1=[number.split("").reverse().join('')];
// var rev =[number]


  
//   for(var i=0 ; i<rev1.length;i++){
        
    
//     if ((rev1[i])== rev[i])
//     console.log("true")
//     else 
//     console.log("false")
     
    
//   }


  //////////////////////task 4 ///////////////
// var input = prompt("enter number");


// var arr=[1,2,3,4,5,67,7];

// for(var i= 0;i<=arr.length-1;i++){
    
//     if((input ==arr[i]))
//     console.log("exist "+i)
    

// }


//////////////////////////////task 5 ////////////////////



    
// function func() { 
//     var arr = [1, 2, 3, 4]; 
//     var input =(prompt("add number"))
    
    
//     arr.push(input);
     
//     var silce = arr.splice(1,1)
    
//     console.log(" remove elements number " + silce); 
//     console.log("  new array is " + arr); 
// }

// func(); 



/////////////////////////////task 6 ////////////////////


// let text = "iti aswan";
// let arr = text.substr(0, 2);
// console.log(arr)

// let text1 = "iti aswan!";
// let arr1 = text.substr(7, 7);

// console.log(arr1)

// var result=arr.concat(arr1)
// console.log(result)



///////////////////////////////////// taske 7 /////////////////////

var input=prompt("entar string");
main(input);

function main(input) {  
      var arr= input.split("")

var z =0 ,o=0;


for (var i = 0; i < arr.length; i++) {
  if (arr[i] == "z") 
    z++;
  else if (arr[i] == "o") 
    o++;
}

console.log(z * 2 === o? "yes":"no");
}













  
 
 
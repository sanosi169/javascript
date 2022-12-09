
// function newwindow() {
//     window.open("https://www.facebook.com/","","blank");
// }// }
// var newindow;
// function display () {
//    newindow= window.open("https://www.facebook.com/","","blank");

// }
//  function closewindow() {
//     console.log(newindow)
//     newindow.focus()

// }
// document.getElementById("flay").onclick=display
// document.getElementById("down").onclick=closewindow;

// task 2
// var date
// function show() {
//     date=new Date();
//     document.getElementById("time").innerHTML=date;
  
    
// }
// setInterval(show,1000);


// task 3
// function pragraph(params) {
//     var name="Abelrahman Mohamed Sanosi";
//     document.getElementById("fname").innerHTML=name;
// }
// setInterval(pragraph,1000);




// task 4
// setTimeout(function(){
//     function scroling(params) {
//         if (scrolly<=777) {
//             alert("hi");
//         }
//     }
// })


// task 5
var newindow;
function display ()
 {
     newindow=window.open();
    var pragraph="Abelrahman Mohamed Sanosi";
    newindow.document.getElementById("fname").innerHTML=pragraph;
    
    
    
}
function closewindow(params) {
    x.close;
    
    
}
console.log(display);
document.getElementById("flay").onclick(display);
// setTimeout(closewindow,3000);

function openWin()
{
  myWindow=window.open('','','width=200,height=100');
  myWindow.document.write("<p>This is 'myWindow'</p>");
  myWindow.focus();
  myWindow.print(); //DOES NOT WORK
}
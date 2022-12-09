// // function store() {
// //     x=document.getElementById("submit");
// //     x.localStorage.setItem("submit",x.value);
// // }
// function save() {
// var x=document.getElementById("user");
//  var email=document.getElementById("email");
//  var password=document.getElementById("password");
//  var submit=document.getElementById("submit");
// // function store() {
    
// //    localStorage.setItem("name",user.value);
   
// //    localStorage.setItem("email",email.value);
   
// //    localStorage.setItem("password",password.value);

// // }
// // function setCookie(name,value,exp_days) {
// //     var d = new Date();
// //     d.setTime(d.getTime() + (exp_days*24*60*60*1000));
// //     var expires = "expires=" + d.toGMTString();
// //     document.cookie = user + "=" + value + ";" + expires + ";path=/";
// // }
// // setCookie("user",user.value,7);
// // setCookie("email",user.value,7);
// // setCookie("password",user.value,7);
// // function setCookie(name,value,days) {
// //     var expires = "";
// //     if (days) {
// //         var date = new Date();
// //         date.setTime(date.getTime() + (days*24*60*60*1000));
// //         expires = "; expires=" + date.toUTCString();
// //     }
// //     document.cookie = user + "=" + (value || "user")  + expires + "7; path=/";
// // }
// // setCookie(name,value,days)

   
// document.cookie="user="+user.value;
// document.cookie="password="+password.value;
// document.cookie="email="+password.value;
// document.cookie="submit="+password.value;

// // document.cookie="myCookie="+password.value+";expires="+06 Dec 2002 11:55:28;
// // document.cookie="myCookie="+email.value+";expires="+06 Dec 2002 11:55:28;
// }
// document.cookie.clea


var todosApi =new XMLHttpRequest();
todosApi.open('GET',"https://dummyjson.com/todos");
todosApi.send();
todosApi.onreadystatechange=function()
{
    if(todosApi.readyState==4&&todosApi.status==200)
    {
        var todos=JSON.parse(todosApi.responseText).todos
        // console.log(todos[0]["id"]);
       for(var i=0;i<todos.length;i++)
       {
        document.getElementById('myDiv').innerHTML+=`<div class="card">
        <h1>${todos[i]['id']}</h1>
        <p class="price">${todos[i]['todo']} $</p>
        <p>${todos[i]['completed']}</p>
        <p><button>Add to Cart</button></p>
      </div>`
       }
    }
}
// console.log(productApi.responseText)
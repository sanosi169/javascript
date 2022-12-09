var imgs=document.querySelectorAll("img");
  console.log(imgs);
  var z=0;

  var id;
{function go()
{
 

id= setInterval(function()
{
   if(z< imgs.length){

   imgs[z++].src="marble3.jpg"
   imgs[z-2].src="marble1.jpg"
  
}
   else{
   imgs[z-1].src="marble1.jpg"
   z=0
   }
   
},1000)



}}
go();


function stop(){
   
console.log(id)
   clearInterval(id)
}

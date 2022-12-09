
var images=["./SlideShow/1.jpg","./SlideShow/2.jpg","./SlideShow/3.jpg","./SlideShow/4.jpg","./SlideShow/5.jpg"];
var i=0
var id;

function next()
{
    
    var img=document.getElementById("my-img");
    
    
    img.src=images[i];
    i++;
    if(i>images.length-1)
    {
        i=0;
    }
   
    


}



function Back()
{
    
    var img=document.getElementById("my-img");
    
    
    
   
    img.src=images[i];
    
    
    i--;

    if(i<0)
    {
        
        i=4
    }
   
    console.log(i)
   
}

var id;

function slidshow(){
    id= setInterval(() => {
        
    
    var img=document.getElementById("my-img");
    
    var img=document.getElementById("my-img");
    
    
    img.src=images[i];
    i++;
    if(i>images.length-1)
    {
        i=0;
    }

}, 1000);
}

function stop() {
    
clearInterval(id)
}


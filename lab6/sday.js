function Box(width,height,array) {

    this.with=width;
    this.height=height;
    this.array=array;
}
function Book(_id,_name,_writer_name, _num) {
    this.id=_id;
    this.name=_name;
    this.writer_name=_writer_name;
    this.num=_num;
   
}
var b1= new Book(1,"football","meesi",500);
var b2= new Book(2,"javascript","sanosi",200);
var b3= new Book(3,"pro","sanosi",200);
var b4= new Book(4,"javascript","sanosi", 200);
var b5= new Book(5,"javascript","sanosi", 200);
var b6= new Book(6,"javascript","sanosi", 200);

var B1= new Box(12,15,[b1,b2]);
// sum Box.prototype.count=
Box.prototype.sum =function () {

    var total=0
    for (let i = 0; i <this. array.length; i++) 
    {total+=this.array[i].num;
        return total;
        
    }
    
}
B1.sum();
B1.sum();
console.log(B1.sum());
console.log(Box);
// Array.prototype.sum = function (prop) {
//     var total = 0
//     var
//     for ( var i = 0, _len = this.length; i < _len; i++ ) {
//         total += this[i][prop]
//     }
//     return total
// }
// console.log(Book.sum("num"));
class Person
{
    static count;
 constructor(_name,_age)
    {
        Person.count++;

        console.log(this.constructor)
        if(this.constructor==Person)
        {
            throw 'error this is abstract class'
        }
        this.name=_name;
        this.age=_age;
     }
      static getcount()

     {
        return Person.count;
     }

}
class Student extends Person

{
    static count;
    #id;
    constructor(_name,_age,_track)
    {
        Student.count++;
        super(_name,_age);
        this.#id=Math.random();
        this.track=_track;
    }


    dislay()
    {
        console.log(this.name,this.age,this.track);
    }

    getid()
    {
        console.log(this.#id);
    }
     static getcount(){
      console.log(Student.count);
    }
}
class Empl extends Person
{
    #id
    static count;
    
    constructor(_name,_age,_position,_salary)
    {
        Empl.count++;
        super(_name,_age);
        this.#id=Math.random();
        this.position=_position;
        this.salary=_salary;
    }
    dislay()
    {
        console.log(this.name,this.age,this.position,this.salary);
    }
    static HRrulues()
    {
      console.log("rules hr to Empl 1-sfkdsjfldskfjdskl 2-dsfhsjbcxnbnmxcbvmbmnsdbsd");
    }
    getid()
    {
        console.log(this.#id);
    }
     showsalary()
     {
        console.log(this.salary)
     }
}
// var S1= new Student("sanosi",29,"php");
// var S2 = new Student("Abdo",29,"php");
// var E1= new Empl("ahmed",25,"manager");
// var E2= new Empl("mohmed",27,"teacher",5000);
// var E3= new Empl("mostafa",27,"teacher",7000);
// var E4= new Empl("ebrahim",27,"teacher",8000);
// var E5= new Empl("hussien",27,"teacher",9000);
// Person.getcount();
// Empl.HRrulues();
// E1.dislay();
// E2.getid();
// S1.getid();
// E2.showsalary();
// E3.dislay();




// task 4
// var arr=[9,8,7,6,5,4,3,2,1];
// var Max_arr= Math.max(...arr);
// document.write("Values of the array are:");
// document.write(arr);
// document.write("The maximum value in the array is :");
// document.write(Max_arr);


// // task 5
//  var fruits = ["apple", "strawberry", "banana", "orange", "mango"] 
// var isStr = 0 

// for(var i = 0; i < fruits.length; i++){
//     if (typeof fruits[i]=="string") {
//         isStr = 1
//     }
// }

// if (isStr == 1) {
//     for(var i = 0; i < fruits.length; i++){
//         if (fruits[i].match(/^a/)) {
//             console.log("some of array elements starts with 'a'");
//         }
//     }
// }

// var bs = fruits.filter(function(arr){
//     return arr.match(/^b/) || arr.match(/^s/)
// })

// console.log(bs);


// console.log("Previous array")
// fruits.forEach(element => {
//     console.log(element);
// });

// console.log("new array");
// bs.forEach(element => {
//     console.log(element);
// });



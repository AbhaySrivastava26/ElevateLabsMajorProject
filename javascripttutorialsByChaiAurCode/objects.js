
// // const mySymbol= Symbol("KeySmile");
// // const myObjects={
// // namee :"Abhay",
// // fullName :"AbhaySrivastava",
// // [mySymbol]:'Smile',
// // age:20,
// // email_id:'abhaysrivastava@'

// // };
// // // console.log(myObjects.email_id);
// // // console.log(myObjects['age']);
// // console.log(myObjects[mySymbol])
// // myObjects.greetings=function(){
// //     console.log(`HEllo this is me ${this.namee}`)
// // }
// // myObjects.age=25;
// // // console.log(myObjects.age);
// // Object.freeze(myObjects)
// // myObjects.age=233;
// // console.log(myObjects.greetings())






// // /////       objects part 2 in javascript by chai aur code


// // singleton object
// // const tinder= new Object()
// // console.log(tinder)
// //non singleton object in javascript
const tinder={};
// console.log(tinder)

tinder.id="123";
tinder.name="Abhay";
// const regularuser={

//    email:"abhaysrivastava@gmail.com",
//    fullname:{
//    username:{
//     firstname:"abhaysrivastava",
//    }
//    }
// };
// console.log(regularuser.fullname.username);

// const obj1={1:'a'};
// const obj2={2:'b'};
// // const obj3=Object.assign({},obj1,obj2);
// const obj3={...obj1 ,...obj2}
// // console.log(obj3)
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(tinder.hasOwnProperty('name'));

const course ={
    coursename:"js",
    courseInstructor:"Abhay"
}
const {courseInstructor:inst} =course
console.log(inst)

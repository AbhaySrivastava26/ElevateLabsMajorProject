// // let obj=1
// // console.log(obj)
// // function add(a ,b){
// //     return a+b;
// // }
// // console.log(add(4,5))

// function justloggedinIn(username){
//     return `${username } just logged in `
// }
// console.log(justloggedinIn("aman"))

const obj={
    user:"abhay",
    price:200
}
function handlobj(val){
    console.log(`username is ${val.user} andn price is ${val.price}`)
}
const newarr=[323,3232,5423,66,"abhauuu"]
function getvalfromarray(arr){
    return arr[5]
}
console.log(getvalfromarray(newarr))
handlobj(obj)
handlobj({
    user:"Aman",
    price:3000
})

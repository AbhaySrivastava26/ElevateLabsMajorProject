// // /* This JavaScript code is selecting an element with the id "dom" from the HTML document and then
// // accessing its inner HTML content. The inner HTML content is then stored in the variable `val` using
// // the `const` keyword. Finally, the `console.dir(val)` statement is used to log the value of `val` to
// // the console in a structured way. */
// // // const val=document.getElementById("dom").innerHTML
// // console.dir(val)
// const headings=document.getElementsByClassName("headings-class")
// console.dir(headings)
// console.log(headings)
let divs=document.querySelectorAll(".box")
console.log(divs[1])
// divs[0].innerText="new unique value 1"
// divs[1].innerText="new unique value 2"
// divs[2].innerText="new unique value 3"
let idx=0
for(div of divs){
    div.innerText=`new unique value is  ${idx}`;
    idx++;
}

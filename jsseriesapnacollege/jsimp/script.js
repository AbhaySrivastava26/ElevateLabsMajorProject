// // h1=document.querySelector("h1");
// // function changeColor(color ,deplay){
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(()=>{
// // h1.style.color="red";
// // console.log("Color changed to red");
// //         },delay);
// //     })
// // }

// let h1=document.querySelector("h1");

// function changecolor(color,display){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color=color;
//             console.log(`Color changed to ${color}`);
//             resolve();
//         },display)
//     })
// }
// async function demo(){

//     try{
//    await changecolor("red",1000)
//       await changecolor("green",1000)
//      changecolor("blue",1000)
//      changecolor("yellow",1000)
//      changecolor("orange",1000)
//     }   catch(err){
//         console.log("Error is ",err);
// }
// }

let url="https://catfact.ninja/fact";
// fetch(url).then((res)=>{
//     console.log(res)
//     return res.json();
// //    console.log( res.json())

// })
// .then((data)=>{
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log(data2.fact)
// })
//  .catch((err)=>{
//     console.log("Error is ",err);
//  })

async function fetchData(){
    try{
        let res=await fetch(url);
        let data=await res.json();
        console.log(data.fact);
}catch(e){
    console.log("Error is ",e);
    console.log("sorry for inconvenience");
}
}

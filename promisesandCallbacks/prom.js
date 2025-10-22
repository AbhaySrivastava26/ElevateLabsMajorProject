// let promise=new Promise((resolve,reject)=>{
//     console.log("im a promise")
//     reject("error")
// })


// function getData(dataid,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataid);
//         if(getNextData){
//             getNextData();
//         }
//     },2000)
// }



// function getData(dataid,getNextData){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("data",dataid);
//         resolve("success")
//         if(getNextData){
//             getNextData();
//         }
//     },5000)
// });
// }

    // const getpromise=()=>{
    //     return new Promise((resolve,reject)=>{
    //         console.log("im a promise")
    //         resolve("accepted")
    //     })
    // }
    // let promise=getpromise();
    // promise.then((res)=>{
    //     console.log("promise fulfilled",res)
    // })

    // promise.catch((err)=>{
    //     console.log("rejected",err)
    // })

    function asyncwait1(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            console.log("data1");
            resolve("success1")
            }, 4000)
        })
    }
    function asyncwait2(){
        return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            console.log("data2")
            resolve("success2")
         },4000)
        })
    }
console.log("fetcing data 1")
let p1=asyncwait1()
p1.then((res)=>{
    console.log(res)
    console.log("fetching data 2 ")
let p2=asyncwait2()
p2.then((res)=>{
    console.log("res")
})

})











// getData(1,()=>{
// console.log("getting data 2     ")
// getData(2,()=>{
//     console.log("getting data 3")
//     getData(3,()=>{
//         console.log("geting data 4")
//     })
// })
// })
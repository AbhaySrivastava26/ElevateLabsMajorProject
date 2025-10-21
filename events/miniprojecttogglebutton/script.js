    // let modebtn=document.querySelector("#tog")
    // let body=document.querySelector("body")
    // let curmode="light"
    // modebtn.addEventListener("click" ,()=>{
    //     console.log("you are trying to change mode  ")
    //     if(curmode=="light"){
    //         curmode="dark"
    //         body.classList.add("dark");       
    //         body.classList.remove("light")
    //     }else{
    //         curmode="light"
    //        body.classList.add("light");  
    //        body.classList.remove("dark")
    //     }
    //     console.log(curmode)
    // })
    let hov=document.querySelector("div");
    let body=document.querySelector("body")
    let curmode="red"
    hov.addEventListener("mouseenter",()=>{
        console.log("curr mode");
        if(curmode=="red"){
            curmode="blue"
            body.classList.add("blue")
            body.classList.remove("red")
        }else{
            curmode="red"
            body.classList.add("red")
            body.classList.remove("blue")
        }
        console.log(curmode)
    })

    hov.addEventListener("mouseover" ,()=>{
            hov.style.backgroundColor="pink"
             box.style.color = "black";
    })
    hov.addEventListener("mouseleave",()=>{
        hov.style.backgroundColor="lightgray"
        box.style.color="black"
    })
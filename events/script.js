    // let btn1=document.querySelector("#btn1");
    // btn1.onclick=()=>{
    //     alert("button was clicked")
    //     console.log("button 1 . clicked ")
    //     let a=23;
    //     a++;
    //     console.log(a);
    // };
    // let onn=document.querySelector("div")
    // onn.onmouseover=()=>{
    //     console.log("This box was clicked")
    // };
    // let btn2=document.querySelector("#btn2")
    // btn2.onclick=()=>{
    //     alert("clicked")
    // }
    let btn1=document.querySelector("#btn1");
    // btn1.onclick=(evt)=>{
    //     console.log(evt);
    //     console.log(evt.type)
    //     console.log(evt.clientX,evt.clientY)
    // }
    btn1.addEventListener("click",(evt)=>{
        console.log("button1 was clicked  1")
         console.log(evt);
       console.log(evt.type)
    });
    const handler3=()=>{
        console.log("button was clicked again 3")
    }
     btn1.addEventListener("click",handler3)

     
        btn1.addEventListener("click",()=>{
        console.log("button1 was clicked  again 3")
    });
        btn1.removeEventListener("click",handler3)
let boxes=document.querySelectorAll(".box")
let reset_btn=document.querySelector("#Reset")
let newbtn=document.querySelector("#newbtn")
let msgContainer=document.querySelector(".msgcontainer")
let msg=document.querySelector("#msg    ")

//   reset_btn.addEventListener("click",(evt)=>{
//         console.log("button1 was clicked  1")
//         alert("clicked")
//          console.log(evt);
//        console.log(evt.type)
//     });
let turno=true  //playerX playero

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText=""
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",(evt)=>{
        // alert("it is a box")
        // box.innerText="X"
        if(turno){
            box.innerText="O"
            turno=false
        }else{
            box.innerText="X"
            turno=true;
        }
        box.disabled=true
        checkWinner()
    });
});

const showWinner=(winner)=>{
    msg.innerText=`Congratulations ,Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes()

}
const checkWinner=()=>{
            for( let pattern of winPattern){
            //     console.log(pattern[0],pattern[1],pattern[2])
            //     console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText );
            let pos1val=boxes[pattern[0]].innerText;
            let pos2val=boxes[pattern[1]].innerText;
            let pos3val=boxes[pattern[2]].innerText;
     if(pos1val!="" && pos2val!="" && pos3val!=""){      
     if(pos1val==pos2val&&pos2val==pos3val){
                console.log(`Winner is ${pos1val}`)
                showWinner(pos1val)
            }
        }

        }
         
}
const resetGame=()=>{
    turno=true;
    enableBoxes();
    msgContainer.classList.add("hide")

}

newbtn.addEventListener("click",resetGame)
reset_btn.addEventListener("click",resetGame)
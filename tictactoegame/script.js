// let boxes=document.querySelectorAll(".box");
// let resetBtn=document.querySelector("#reset-button");
// let turnO=true; // playerX and PlayerO
// let newgamebutton=document.querySelector("#new-button");
// let msgcontainer=document.querySelector("#msg-container");
// let msg=document.querySelector("#msg");
// //winning patterns storing
// const winPattern=[
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8],

// ];
// const resetgame=() =>{
// turnO=true;
// enableboxes();
// msgcontainer.classList.add('hide');
// };
// boxes.forEach((box)=> {
//     box.addEventListener("click",()=> {
//         console.log("box was clicked");
//         if(turnO===true){
//             box.innerText="O";
//             turnO=false;
//         }else{
//             box.innerText="X";
//             turnO=true;
//         }
//         box.disabled=true;
//         checkWinner();
//     }); 
// });
// const diableBoxes=()=>{
// for(let box of boxes){
//     box.disabled=true;
// }
// };
// const enableboxes=()=>{
// for(let box of boxes){
//     box.disabled=false;
//     box.innerText="";
// }
// };
// const showWinner= (winner) =>{
//     msg.innerText=`Congratulations ,Winner is ${winner}`;
//     msgcontainer.classList.remove('hide');
//     diableBoxes();
// };  
// const checkWinner=()=>{
//     for(let pattern of winPattern){
//         // console.log(pattern)
//         // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
//         let position1=boxes[pattern[0]].innerText;
//         let position2=boxes[pattern[1]].innerText;
//         let position3=boxes[pattern[2]].innerText;
//         if(position1!="" && position2!="" && position3!=""){
//             if(position1===position2 && position2===position3){
//                 console.log('winner',position1);
//                 showWinner(position1);
//             }
//         }
//     }
// }
// newgamebutton.addEventListener("click" ,resetgame);
// resetBtn.addEventListener("click" ,resetgame);
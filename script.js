let boxes=document.querySelectorAll(".box");
let newBtn=document.querySelector("#new-btn");
let resetBtn=document.querySelector("#reset-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
let count=0;

let winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let resetGame=()=>{
    for(let box of boxes){
        count=0;
        turnO=true;
        box.innerText="";
        box.disabled=false;
    }
};
let newGame=()=>{
    for(let box of boxes){
        count=0;
        turnO=true;
        box.innerText="";
        box.disabled=false;
        disable();
    }
};
let enable=(winner)=>{
    msgContainer.classList.remove("hide");
    msg.innerText=`congratulation,winner is "${winner}"`;
}
let disable=()=>{
    msgContainer.classList.add("hide");
}
let gameDraw=()=>{
    msgContainer.classList.remove("hide");
    msg.innerText=`the was Draw`;
}
let afterWinner=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

newBtn.addEventListener("click",newGame);
resetBtn.addEventListener("click",resetGame);


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;

        let isWinner=checkWinner();

        if(count===9 && !isWinner){
            gameDraw();
        }
    })
});

let checkWinner=()=>{
for(let pattern of winPatterns){
    let winPos1=boxes[pattern[0]].innerText;
    let winPos2=boxes[pattern[1]].innerText;
    let winPos3=boxes[pattern[2]].innerText;

    if(winPos1 !="" && winPos2 !="" && winPos3 !=""){
        if(winPos1 === winPos2 && winPos2 === winPos3){
            enable(winPos1);
            afterWinner();
        }
    }
  }
};

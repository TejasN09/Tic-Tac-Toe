console.log("Welcome to Tic Tac Toe");

let turn="X";
let isgameover = false;
const spaces=[];
//Function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0": "X";
}
//Fuction to check for a win
const checkWin=()=>{
    let boxtext =document.getElementsByClassName('boxtext');
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=='')){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            isgameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "290px";
        }
    })
}
//main game logic
let boxes =document.getElementsByClassName("box");
let count=0;
let draw=0;
let pink=false;
let make="Match Tie!";
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector('.boxtext');
    
    element.addEventListener('click',()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            checkWin();
            if(!isgameover && count<8){  
                document.getElementsByClassName("info")[0].innerText ="Turn of " + turn;
            }
            count++;
            if(!pink && count>8){
                document.getElementsByClassName("info")[0].innerText="Match Tie!";
               // console.log("maa");
            }
        }
    })
    count=0;
})




//reset button
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText="";
    });
    turn="X";
    count=0;
    pink=false;
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText ="Turn of " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})
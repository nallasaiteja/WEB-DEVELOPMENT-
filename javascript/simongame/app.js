let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"]; 

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started");
        started = true;
        levelUp();
    }
    
})

function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn  = document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    btnFlash(randBtn);
}
//checkAns
function checkAns(idx){
    
    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
          setTimeout(function(){levelUp()},1000);
       }
    }
    else{
        h2.innerHTML = `Game Over! Your Score :<b>${level}</b> <br> Press any key to start again`;
        reset();
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
    }
}

// adding eventlistener to all buttons
function btnpress(){
    let btn = this;
    btnFlash(btn);

    usercolor = btn.getAttribute('id');
    userSeq.push(usercolor);
    
    checkAns(userSeq.length-1);
    
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    gameSeq = [];
    level = 0;
    userSeq = [];
}
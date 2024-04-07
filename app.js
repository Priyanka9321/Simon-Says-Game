let gameSq = [];
let userSq = [];
let btns = ["red","yellow","purple","green"];
let h2 = document.querySelector("h2");
let start = false;
let level = 0;
let startButton = document.getElementById("startButton");
startButton.addEventListener("click", function () {
    if (start == false) {
        console.log("Game start!");
        start = true;
    }

    levelUp();
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },500);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },300);
}

function levelUp() {
    userSq = [];
    level++;
    h2.innerText = `Level ${level}`;
    //random btn flash
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSq.push(randColor);
    console.log(gameSq);
    gameFlash(randBtn);
}

function checkBtn(idx) {
    if(userSq[idx] == gameSq[idx]){
        if (userSq.length == gameSq.length) {
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over! your score is <b>${level}</b> <br>Press any key to start Game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white"; 
        },200);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userColor = btn.getAttribute("id");
    userSq.push(userColor);
    console.log(userSq);
    userFlash(btn);
    checkBtn(userSq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btns of allBtns) {
    btns.addEventListener("click",btnPress);
}

function reset() {
    start = false;
    gameSq = [];
    userSq = [];
    level = 0;
}

function gameFlash(btn) {
    btn.classList.add("flash");
    let colorSound = document.getElementById(btn.getAttribute("id") + "Sound");
    colorSound.play();
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 500);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    let colorSound = document.getElementById(btn.getAttribute("id") + "Sound");
    colorSound.play();
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 300);
}

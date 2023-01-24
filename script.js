let ranNum = parseInt(Math.random()* 100 + 1)//1 for to start with 1 random nevergives interer range for random is 0.... to 0.99999
// console.log(ranNum);
let btn=document.getElementById("btn")
let userInput = document.getElementById("userInput")
let questionMark =document.getElementById("questionMark")
let body = document.getElementsByTagName("body")
let stratguesstext =document.getElementById("scor")
let reloadgame =document.getElementById('reloadgame')
let initialscore=100
let highscore=null;

btn.addEventListener("click",function(){

    userInput= document.getElementById("userInput").value

    if(userInput == ranNum){
        questionMark.innerText=`${ranNum}`;
        scor.innerText="🤩🤩 Hurray You Won !!! 🤩🤩";
        document.body.style.backgroundColor="green";
        initialscore--
        document.querySelector('#score').textContent=initialscore
         highscore=initialscore
          document.querySelector('.highscore').textContent=highscore
    }
    else if(userInput < ranNum){
        scor.innerText="Your Guess Is Low";
        initialscore--
        document.querySelector('#score').textContent=initialscore
    }
    else if (userInput>ranNum){
        scor.innerText="Your Guess Is High";
        initialscore--
        document.querySelector('#score').textContent=initialscore

    }
})

reloadgame.addEventListener("click",function(){
    location.reload();
})
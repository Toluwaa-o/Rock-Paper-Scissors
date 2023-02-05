const rulesBtn = document.getElementById('rules-btn');
const rulesEl = document.querySelector('.rules');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const output = document.querySelector('.output');
const score = document.getElementById('scoreEl');
const closeBtn = document.getElementById('close-btn');
const startPage = document.querySelector('.start');
const activePage = document.querySelector('.active')
const choices = document.querySelectorAll('.image-here')
const announce = document.querySelector('.output > h3');
let restartBtn = document.getElementById('restart')
let playerScore = 0;

window.addEventListener('load', ()=>{
    if(localStorage.getItem('rPs') === null){
        playerScore = 0;
        clearSC.style.display = 'none';
        saveSC.style.display = 'block';
    }else {
        let savedScore = localStorage.getItem('rPs')
        playerScore = Number(savedScore);
        clearSC.style.display = 'block';
        saveSC.style.display = 'none';
        score.textContent = playerScore;
    }
})

rulesBtn.addEventListener('click', ()=>{
    rulesEl.style.display = 'grid'
})

closeBtn.addEventListener('click', ()=>{
    rulesEl.style.display = 'none'
})

let choiceNum = null;
let compChoice = null;

rock.addEventListener('click', ()=>{
    choices[0].style.width = 'fit-content'
    choices[0].style.height = 'fit-content'
    choices[0].innerHTML = `<div class="rock" style='margin: 0;'>
    <img src="images/icon-rock.svg" alt="rock">
  </div>`;
  choiceNum = 0;
    setTimeout(activeGame(),1500)
})

paper.addEventListener('click', ()=>{
    choices[0].style.width = 'fit-content'
    choices[0].style.height = 'fit-content'
    choices[0].innerHTML = `<div class="paper" style='margin: 0;'>
    <img src="images/icon-paper.svg" alt="paper">
  </div>`;
  choiceNum = 1;
    setTimeout(activeGame(),1500)
    console.log(this.innerHTML)
})

scissors.addEventListener('click', ()=>{
    choices[0].style.width = 'fit-content'
    choices[0].style.height = 'fit-content'
    choices[0].innerHTML = `<div class="scissors" style='margin: 0;'>
    <img src="images/icon-scissors.svg" alt="scissors">
  </div>`;
  choiceNum = 2;
    setTimeout(activeGame,1500)
    console.log(this.innerHTML)
})

function activeGame(){
    startPage.style.display = 'none';
    activePage.style.display = 'grid';
    output.style.display = 'none';
    setTimeout(computerPick, 5000);
}

function computerPick(){
    compChoice = Math.floor(Math.random()*3);
    if(compChoice === 0){
        choices[1].style.width = 'fit-content'
        choices[1].style.height = 'fit-content'
        choices[1].innerHTML = `<div class="rock" style='margin: 0;'>
        <img src="images/icon-rock.svg" alt="rock">
        </div>`;
        setTimeout(determineWinner, 2000);
    }else if(compChoice === 1){
        choices[1].style.width = 'fit-content'
        choices[1].style.height = 'fit-content'
        choices[1].innerHTML = `<div class="paper" style='margin: 0;'>
        <img src="images/icon-paper.svg" alt="paper">
        </div>`;
        setTimeout(determineWinner, 2000)
    }else {
        choices[1].style.width = 'fit-content'
        choices[1].style.height = 'fit-content'
        choices[1].innerHTML = `<div class="scissors" style='margin: 0;'>
        <img src="images/icon-scissors.svg" alt="scissors">
        </div>`;
        setTimeout(determineWinner, 2000)
    }
}

function determineWinner(){
    if(choiceNum === compChoice){
        announce.textContent = `It's a tie`;
        output.style.display = 'block'
    }else if(choiceNum === 0 && compChoice === 2){
        announce.textContent = `You win`;
        playerScore = playerScore + 1;
        score.textContent = playerScore
        output.style.display = 'block'
    }else if(choiceNum === 2 && compChoice === 0){
        announce.textContent = `You lose`;
        playerScore = playerScore - 1;
        score.textContent = playerScore
        output.style.display = 'block'
    }else if(choiceNum === 1 && compChoice === 2){
        announce.textContent = `You lose`;
        playerScore = playerScore - 1;
        score.textContent = playerScore
        output.style.display = 'block'
    }else if(choiceNum === 2 && compChoice === 1){
        announce.textContent = `You win`;
        playerScore = playerScore + 1;
        score.textContent = playerScore
        output.style.display = 'block'
    }else if(choiceNum === 1 && compChoice === 0){
        announce.textContent = `You win`;
        playerScore = playerScore + 1;
        score.textContent = playerScore
        output.style.display = 'block'
    }else if(choiceNum === 0 && compChoice === 1){
        announce.textContent = `You lose`;
        playerScore = playerScore - 1;
        score.textContent = playerScore
        output.style.display = 'block'
    }
}

restartBtn.addEventListener('click', ()=>{
    startPage.style.display = 'block';
    activePage.style.display = 'none';
    choices[0].innerHTML = '';
    let x = window.matchMedia('(min-width: 768px)')
    choices[1].style.background = 'hsl(229, 25%, 26%)';
    choices[1].style.borderRadius = '50%';
    if(x.matches){
        choices[1].innerHTML = '';
        choices[1].style.width = '157px';
        choices[1].style.height = '157px';
    }else {
        choices[1].innerHTML = '';
        choices[1].style.width = '132px';
        choices[1].style.height = '132px';
    }
})

const clearSC = document.getElementById('clearLS');
const saveSC = document.getElementById('saveLS');

clearSC.addEventListener('click', ()=>{
    localStorage.clear();
    clearSC.style.display = 'none'
    saveSC.style.display = 'block'
})

saveSC.addEventListener('click', ()=>{
    saveSC.style.display = 'none';
    clearSC.style.display = 'block';
    localStorage.setItem('rPs', `${playerScore}`);
})
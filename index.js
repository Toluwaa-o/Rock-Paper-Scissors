const rulesBtn = document.getElementById('rules-btn');
const rulesEl = document.querySelector('.rules');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const spock = document.querySelector('.spock');
const lizard = document.querySelector('.lizard');
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
    if(localStorage.getItem('rpsls') === null){
        playerScore = 0;
        clearSC.style.display = 'none';
        saveSC.style.display = 'block';
    }else {
        let savedScore = localStorage.getItem('rpsls')
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
let didYou = null;

rock.addEventListener('click', ()=>{
    choices[0].style.width = 'fit-content'
    choices[0].style.height = 'fit-content'
    choices[0].innerHTML = `<div class="rock" style='margin: 0;'>
    <img src="images/icon-rock.svg" alt="rock">
    <span style="--i:1;"></span>
    <span style="--i:2;"></span>
    <span style="--i:3;"></span>
    <span style="--i:4;"></span>
  </div>`;
  choiceNum = 0;
    setTimeout(activeGame,1500)
})

paper.addEventListener('click', ()=>{
    choices[0].style.width = 'fit-content';
    choices[0].style.height = 'fit-content';
    choices[0].innerHTML = `<div class="paper" style='margin: 0;'>
    <img src="images/icon-paper.svg" alt="paper">
    <span style="--i:1;"></span>
    <span style="--i:2;"></span>
    <span style="--i:3;"></span>
    <span style="--i:4;"></span>
  </div>`;
  choiceNum = 1;
    setTimeout(activeGame,1500)
    console.log(this.innerHTML)
})

scissors.addEventListener('click', ()=>{
    choices[0].style.width = 'fit-content'
    choices[0].style.height = 'fit-content'
    choices[0].innerHTML = `<div class="scissors" style='margin: 0;'>
    <img src="images/icon-scissors.svg" alt="scissors">
    <span style="--i:1;"></span>
    <span style="--i:2;"></span>
    <span style="--i:3;"></span>
    <span style="--i:4;"></span>
  </div>`;
  choiceNum = 2;
    setTimeout(activeGame,1500)
    console.log(this.innerHTML)
})

lizard.addEventListener('click', ()=>{
    choices[0].style.width = 'fit-content'
    choices[0].style.height = 'fit-content'
    choices[0].innerHTML = `<div class="lizard" style='margin: 0;'>
    <img src="images/icon-lizard.svg" alt="lizard">
    <span style="--i:1;"></span>
    <span style="--i:2;"></span>
    <span style="--i:3;"></span>
    <span style="--i:4;"></span>
  </div>`;
  choiceNum = 3;
    setTimeout(activeGame,1500)
})

spock.addEventListener('click', ()=>{
    choices[0].style.width = 'fit-content'
    choices[0].style.height = 'fit-content'
    choices[0].innerHTML = `<div class="spock" style='margin: 0;'>
    <img src="images/icon-spock.svg" alt="spock">
    <span style="--i:1;"></span>
    <span style="--i:2;"></span>
    <span style="--i:3;"></span>
    <span style="--i:4;"></span>
  </div>`;
  choiceNum = 4;
    setTimeout(activeGame,1500)
})

function activeGame(){
    startPage.style.display = 'none';
    activePage.style.display = 'grid';
    output.style.display = 'none';
    setTimeout(computerPick, 5000);
}

function computerPick(){
    compChoice = Math.floor(Math.random()*5);
    const animationRemove = document.querySelectorAll('.picked .image-here div span');
    if(compChoice === 0){
        animationRemove[0].style.animation = 'none'
        animationRemove[1].style.animation = 'none'
        animationRemove[2].style.animation = 'none'
        animationRemove[3].style.animation = 'none'
        choices[1].style.width = 'fit-content'
        choices[1].style.height = 'fit-content'
        choices[1].innerHTML = `<div class="rock" style='margin: 0;'>
        <img src="images/icon-rock.svg" alt="rock">
        <span style="--i:1;"></span>
        <span style="--i:2;"></span>
        <span style="--i:3;"></span>
        <span style="--i:4;"></span>
        </div>`;
        setTimeout(determineWinner, 2000);
    }else if(compChoice === 1){
        animationRemove[0].style.animation = 'none'
        animationRemove[1].style.animation = 'none'
        animationRemove[2].style.animation = 'none'
        animationRemove[3].style.animation = 'none'
        choices[1].style.width = 'fit-content'
        choices[1].style.height = 'fit-content'
        choices[1].innerHTML = `<div class="paper" style='margin: 0;'>
        <img src="images/icon-paper.svg" alt="paper">
        <span style="--i:1;"></span>
        <span style="--i:2;"></span>
        <span style="--i:3;"></span>
        <span style="--i:4;"></span>
        </div>`;
        setTimeout(determineWinner, 2000)
    }else if(compChoice === 2){
        animationRemove[0].style.animation = 'none'
        animationRemove[1].style.animation = 'none'
        animationRemove[2].style.animation = 'none'
        animationRemove[3].style.animation = 'none'
        choices[1].style.width = 'fit-content'
        choices[1].style.height = 'fit-content'
        choices[1].innerHTML = `<div class="scissors" style='margin: 0;'>
        <img src="images/icon-scissors.svg" alt="scissors">
        <span style="--i:1;"></span>
        <span style="--i:2;"></span>
        <span style="--i:3;"></span>
        <span style="--i:4;"></span>
        </div>`;
        setTimeout(determineWinner, 2000)
    }else if(compChoice === 3){
        animationRemove[0].style.animation = 'none'
        animationRemove[1].style.animation = 'none'
        animationRemove[2].style.animation = 'none'
        animationRemove[3].style.animation = 'none'
        choices[1].style.width = 'fit-content'
        choices[1].style.height = 'fit-content'
        choices[1].innerHTML = `<div class="lizard" style='margin: 0;'>
        <img src="images/icon-lizard.svg" alt="lizard">
        <span style="--i:1;"></span>
        <span style="--i:2;"></span>
        <span style="--i:3;"></span>
        <span style="--i:4;"></span>
        </div>`;
        setTimeout(determineWinner, 2000)
    }else {
        animationRemove[0].style.animation = 'none'
        animationRemove[1].style.animation = 'none'
        animationRemove[2].style.animation = 'none'
        animationRemove[3].style.animation = 'none'
        choices[1].style.width = 'fit-content'
        choices[1].style.height = 'fit-content'
        choices[1].innerHTML = `<div class="spock" style='margin: 0;'>
        <img src="images/icon-spock.svg" alt="spock">
        <span style="--i:1;"></span>
        <span style="--i:2;"></span>
        <span style="--i:3;"></span>
        <span style="--i:4;"></span>
      </div>`;
    }
}

function determineWinner(){
    if(choiceNum === compChoice){
        announce.textContent = `It's a tie`;
        output.style.display = 'block'
    }else if(choiceNum === 0 && compChoice === 2){
        didYou = true;
        setTimeout(winOrLose, 1000)
    }else if(choiceNum === 0 && compChoice === 1){
        didYou = false;
        setTimeout(winOrLose, 1000)
    }else if(choiceNum === 0 && compChoice === 3){
        didYou = true;
        setTimeout(winOrLose, 1000)
    }else if(choiceNum === 0 && compChoice === 4){
        didYou = false;
        setTimeout(winOrLose, 1000)
    }else if(choiceNum === 1 && compChoice === 0){
        didYou = true;
        setTimeout(winOrLose, 1000)
    }else if(choiceNum === 1 && compChoice === 2){
        didYou = false;
        setTimeout(winOrLose, 1000)
    }else if(choiceNum === 1 && compChoice === 3){
        didYou = false;
        setTimeout(winOrLose, 1000)
    }else if(choiceNum === 1 && compChoice === 4){
        didYou = true;
        setTimeout(winOrLose, 1000)
    }else if(choiceNum === 2 && compChoice === 0){
        didYou = false;
        setTimeout(winOrLose, 1000)
    }else if(choiceNum === 2 && compChoice === 1){
        didYou = true;
        setTimeout(winOrLose, 1000)
    }else if(choiceNum === 2 && compChoice === 3){
        didYou = true;
        setTimeout(winOrLose, 1000)
    }else if(choiceNum === 2 && compChoice === 4){
        didYou = false;
        setTimeout(winOrLose, 1000)
    }else if(choiceNum === 3 && compChoice === 0){
        didYou = false;
        setTimeout(winOrLose, 1000)
    }else if(choiceNum === 3 && compChoice === 1){
        didYou = true;
        setTimeout(winOrLose, 1000)
    }else if(choiceNum === 3 && compChoice === 2){
        didYou = false;
        setTimeout(winOrLose, 1000)
    }else if(choiceNum === 3 && compChoice === 4){
        didYou = true;
        setTimeout(winOrLose, 1000)
    }else if(choiceNum === 4 && compChoice === 0){
        didYou = true;
        setTimeout(winOrLose, 1000)
    }else if(choiceNum === 4 && compChoice === 1){
        didYou = false;
        setTimeout(winOrLose, 1000)
    }else if(choiceNum === 4 && compChoice === 2){
        didYou = true;
        setTimeout(winOrLose, 1000)
    }else if(choiceNum === 4 && compChoice === 3){
        didYou = false;
        setTimeout(winOrLose, 1000)
    }
}

function winOrLose(){
    if(didYou){
        announce.textContent = `You Win`;
        playerScore = playerScore + 1;
        score.textContent = playerScore
        output.style.display = 'block'
    }else {
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
        choices[1].style.width = '175px';
        choices[1].style.height = '170px';
    }else {
        choices[1].innerHTML = '';
        choices[1].style.width = '110px';
        choices[1].style.height = '110px';
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
    localStorage.setItem('rpsls', `${playerScore}`);
})

// const rpslsLogo = document.getElementById('rpslsLogo');
// let mainPage = document.getElementsByTagName('body')[0]

// rpslsLogo.addEventListener('click', ()=>{
//     mainPage.innerHTML = `
//     <header>
//     <img src="images/logo.svg" id='rpsLogo' alt="logo">
//     <div class="score">
//       <h1>Score</h1>
//       <p id="scoreEl2">0</p>
//     </div>
//   </header>

//   <main>
//     <div class="start">
//       <div class="options">
//         <div class="top">
//           <div class="paper">
//             <img src="images/icon-paper.svg" alt="paper">
//             <span style="--i:1;"></span>
//             <span style="--i:2;"></span>
//             <span style="--i:3;"></span>
//             <span style="--i:4;"></span>
//           </div>
//           <div class="scissors">
//             <img src="images/icon-scissors.svg" alt="Scissors">
//             <span style="--i:1;"></span>
//             <span style="--i:2;"></span>
//             <span style="--i:3;"></span>
//             <span style="--i:4;"></span>
//           </div>
//         </div>
//         <div class="rock">
//           <img src="images/icon-rock.svg" alt="rock">
//             <span style="--i:1;"></span>
//             <span style="--i:2;"></span>
//             <span style="--i:3;"></span>
//             <span style="--i:4;"></span>
//         </div>
//       </div>
//     </div>

//     <div class="rules">
//       <div class="rule-sec">
//         <h2>Rules</h2>
//       <img src="images/image-rules.svg" alt="rules">
//       <img src="images/icon-close.svg" alt="close" id="close-btn">
//       </div>
//     </div>

//     <div class="active">
//       <div class="choices">
//         <div class="picked">
//           <div class="image-here">
//             <!-- <img src="images/icon-rock.svg" alt="your choice"> -->
//           </div>
//           <p>You picked</p>
//         </div>
//         <div class="comp-choice">
//           <div class="image-here">
//             <!-- <img src="" alt=""> -->
//           </div>
//           <p>The house picked</p>
//         </div>
//       </div>
//       <div class="output">
//         <h3 id="result">You Lose</h3>
//         <p id="restart">Play again</p>
//       </div>
//     </div>
//   </main>


  
//   <footer class="attribution">
//     <p id="rules-btn">Rules</p>
//     <p id="clearLS">clear saved</p>
//     <p id="saveLS">save score</p>
//     Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
//     Coded by <a href="#">Toluwalashe</a>.
//   </footer>
//   <script src="index2.js"></script>
//     `
//     let cssHref = document.querySelectorAll('link')[1];
//     let jsScript = document.querySelector('script');
//     cssHref.setAttribute('href', 'style2.css');
//     jsScript.setAttribute('src', 'index2.js');
// })
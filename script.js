let randomNumber=parseInt(Math.random()*100+1);
const submit=document.querySelector('#subt');
const userinput=document.querySelector('#guessField');
const guessslot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const loworhi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playgame=true;

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userinput.value)
        console.log(guess);
        validateguess(guess);
    })
}

function validateguess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }else if(guess<1){
        alert('Please enter the number more than 1');
    }else if(guess>100){
        alert('please enter the number less than 100');
    }else{
        prevGuess.push(guess);
        if(numGuess===11){
            displayguess(guess);
            displaymessage(`Game over.Random number was ${randomNumber}`)
            endgame()
        }else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
    if(guess===randomNumber){
        displaymessage(`you guessed it right`)
        endgame()
    }else if(guess<randomNumber){
        displaymessage(`number is too low`)
    }else if(guess>randomNumber){
        displaymessage(`number is too high`)
    }
}

function displaymessage(message){
    loworhi.innerHTML=`<h2>${message}</h2>`
}

function displayguess(guess){
    userinput.value=''
    guessslot.innerHTML+=`${guess}   `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`;
}

function endgame(){
    userinput.value=''
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newgame">Start new game</h2>`
    startOver.appendChild(p)
    playgame=false;
    newgame();
}

function newgame(){
    const newgamebutton=document.querySelector('#newgame')
    newgamebutton.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*100+1);
    prevGuess=[]
    numGuess=1
    guessslot.innerHTML=' '
    remaining.innerHTML=`${11-numGuess}`;
    userinput.removeAttribute('disabled')
    startOver.removeChild(p);
    playgame=true;
    });
}


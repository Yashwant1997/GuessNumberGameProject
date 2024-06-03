// 'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='correct Number !';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;

// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value=23);


let secretNumber=Math.trunc(Math.random()*20)+1;
// console.log(secretNumber);
let score=20;  //state variable part of application state
let highScore=0;

const displaymessage=function(message){
    document.querySelector('.message').textContent=message;
}


document.querySelector('.check').addEventListener('click', function () {
    // const guess=document.querySelector('.guess').value;
    // console.log(guess, typeof guess);  // 45 string

    // need number
    const guess=Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);  // 45 number

    //if no value in check box then gives falsy value (0)
    //// When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent='No number';
        displaymessage('No number');
        
    }// // When player wins
    else if(guess=== secretNumber){
        // document.querySelector('.message').textContent='correct Number !';
        displaymessage('correct Number !');
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor= '#60b347';
        document.querySelector('.number').style.width='30 rem';

        if (score>highScore) {
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;

        }

    } else if(guess !== secretNumber){

        if (score >1 ) {
            // document.querySelector('.message').textContent= guess>secretNumber? 'Too High !': 'Too Low!';
            displaymessage(guess>secretNumber? 'Too High !': 'Too Low!');
            score--;
            document.querySelector('.score').textContent=score;
            
        }

        else{
            // document.querySelector('.message').textContent='you lost the game!';
            displaymessage('you lost the game!')
            document.querySelector('.score').textContent=0;
        }
    }

    
    
    
    //violate DRY principle
    // // When guess is too high
    // else if(guess > secretNumber){
    //     if (score >1 ) {
    //         document.querySelector('.message').textContent='Too High !';
    //         score--;
    //         document.querySelector('.score').textContent=score;
            
    //     }
    //     else{
    //         document.querySelector('.message').textContent='you lost the game!';
    //         document.querySelector('.score').textContent=0;
    //     }
        

    // } // When guess is too low
    // else if(guess < secretNumber){
        

    //     if (score >1 ) {
    //         document.querySelector('.message').textContent='Too Low !';
    //         score--;
    //         document.querySelector('.score').textContent=score;
            
    //     }
    //     else{
    //         document.querySelector('.message').textContent='you lost the game!';
    //         document.querySelector('.score').textContent=0;
    //     }
    // }


});


document.querySelector('.again').addEventListener('click', function () {  
    
    
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;

    // document.querySelector('.message').textContent='Start guessing...';
    displaymessage('Start guessing...')
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    

    document.querySelector('body').style.backgroundColor= '#222';
    document.querySelector('.number').style.width='15rem';

});


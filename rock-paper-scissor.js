//this is an object that indicates the score of the player
const score = {
    wins: 0,
    losses: 0,
    ties: 0,
    };


     
    
            function playGame(playerMove){
              const computerMove = pickComputerMove();
            //scissors button
              let result='';
              if (playerMove === 'scissors'){
                if (computerMove=== 'rock'){
              result='You lose,computer wins';
    
              }
              else if(computerMove=== 'paper'){
              result='You win';
              }
              else if(computerMove==='scissors'){
              result = 'its a tie';
    
              }
              }
             
    
              //papers button
            else if(playerMove==='paper'){
               
              if (computerMove=== 'rock'){
              result='You win'
    
              }
              else if(computerMove=== 'paper'){
              result='its a tie'
              }
              else if(computerMove==='scissors'){
                result = 'You lose,computer wins'
                
              }
             }
              //rock button
             else if(playerMove==='rock'){
                
                          if (computerMove=== 'rock'){
                          result='its a tie'
    
                          }
                          else if(computerMove=== 'paper'){
                          result='You lose,computer wins'
                          }
                          else if(computerMove==='scissors'){
                            result = 'You win'
                            
                          }
                
    }
    
    if(result==='You win'){
       score.wins ++;
    }
    else if(result==='You lose,computer wins'){
      score.losses ++;
    }
    if(result==='its a tie'){
       score.ties ++;
    }
    
    
    
              //or another method 
              alert(`You picked ${playerMove}, computer picked ${computerMove}, ${result}
    wins:${ score.wins}, losses: ${ score.losses},ties:${ score.ties}`);
            }
          
            //function part
            let computerMove ='';
          
            function pickComputerMove (){
            const randomNumber = Math.random();
    
          if  (randomNumber>=0 &&randomNumber<1/3) {
              computerMove='rock'
          } 
          else if(randomNumber>= 1/3 &&randomNumber < 2/3){
              computerMove='paper';
          }
          else if(randomNumber>=2/3&&randomNumber<1){
              computerMove=('scissors');}
              console.log(computerMove);
           // return statement
              return computerMove;
          }
        
$(document).ready(function(){
    var rightNum=Math.floor(Math.random()*10);
    console.log(rightNum);
    goToBAM = function(){
        window.location.href = "bigassmessage.com/f25fa";
    }
    guessNumber = function(){
        
        var guessNum=prompt("GIMME YO DIGITZ - an integer from 1 to 10 pl0x.");

        while(guessNum!=rightNum){

            if(isNaN(guessNum)){
                var fbString="Is your brain working? That's not a number! ";
            }
            else if(Math.abs(rightNum-guessNum) < 3){
                var fbString="HOT! ";
            }else{
                var fbString="COLD! ";
            };
            
            guessNum=prompt(fbString+"TRY AGAIN!")
        };

        if(guessNum==rightNum){
            goToBAM();
        };
    };
});
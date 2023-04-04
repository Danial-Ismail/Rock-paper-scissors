function play(userChoice){
    var computerChoice=Math.random();
    if(computerChoice<0.34){
        computerChoice="rock";
    }else if(computerChoice<=0.67){
        computerChoice="paper";
    }else{
        computerChoice="scissors"
    }
    var result="";
    if(userChoice===computerChoice){
        result="Tie!";
    }else if(userChoice==="rock"){
        if(computerChoice==="scissors"){
            result="you win";
        }else{
            result="computer wins";
        }
    }else if(userChoice==="paper"){
        if(computerChoice==="rock"){
            result="you win";
        }else{
            result="computer wins;"
        }
    }else if(userChoice==="scissors"){
        if(computerChoice==="paper"){
            result="you win";
        }else{
            result="computer win";
        }
    }
    document.getElementById("result").innerHTML=result
}
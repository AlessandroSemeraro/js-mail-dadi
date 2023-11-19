const buttonGenNumber = document.getElementById('button-gen');

buttonGenNumber.addEventListener('click',function(){

const randomNumberHuman = Math.floor(Math.random() * 6) + 1;
console.log(randomNumberHuman);

const randomNumberBot = Math.floor(Math.random() * 6) + 1;
console.log(randomNumberBot);

if (randomNumberHuman > randomNumberBot){
    const humanWin = document.getElementById('winHuman');
    console.log(humanWin)
    
}else if (randomNumberHuman < randomNumberBot){
    const botWin = document.getElementById("winBot");
    console.log(botWin)
    
}else if (randomNumberHuman == randomNumberBot){
    const drawResult = document.getElementById("draw");
    console.log(drawResult)
}
}
)
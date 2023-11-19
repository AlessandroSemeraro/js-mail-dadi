const mailingList = [
    'havanaclub@gmail.com',
    'vogliadimare@gmail.com',
    'gino@gmail.com',
    'mariangelina@fantozzi.it',
    'jjrabbit@gmail.com',
    'bpitt@protonmail.com'
];

const buttonElement = document.querySelector('button');
const outputElement = document.querySelector("#output-result");

buttonElement.addEventListener('click', function(){
    const userChoice = document.getElementById('input-email').value;

    let isMailFound = false;

    for (let i = 0 ; i < mailingList.length ; i++){
        if (userChoice == mailingList[i]){
            isMailFound = true;
        }
    }

    console.log(isMailFound);

    if (isMailFound == true) {
        outputElement.innerHTML = 'Mail trovata';
        outputElement.classList.add("text-success","fw-bolder");
    } else {
        outputElement.innerHTML = 'Mail non trovata';
        outputElement.classList.add("text-danger","fw-bolder");
    }
})
let poeng1 = 0
let poeng2 = 0
let poeng3 = 0
let poeng4 = 0

let totalPoeng = 4

function updateResult() {
    const totalScore = poeng1 + poeng2 + poeng3 + poeng4;
    document.getElementById("resultat").innerText = 'Du fikk ' + totalScore + ' av ' + totalPoeng + ' Poeng';
}

function chooseAnswer1(){
    const operator = document.getElementById("yAnswer").value;
    if(operator === "a"){
        poeng1 = 1;
    }
    else {
        poeng1 = 0
    }
    updateResult();
    document.getElementById("poen").innerText = "Poeng: "  + poeng1
}

function chooseAnswer2(){
    const operator = document.getElementById("yAnswer2").value;

    if(operator === "d"){
        poeng2 = 1;
    }
    else {
        poeng2 = 0
    }
    updateResult();
    document.getElementById("poen2").innerText = "Poeng: " + poeng2
}

function chooseAnswer3(){
    const operator = document.getElementById("yAnswer3").value;

    if(operator === "b"){
        poeng3 = 1;
    }
    else {
        poeng3 = 0
    }
    updateResult();
    document.getElementById("poen3").innerText = "Poeng: " + poeng3
}

function chooseAnswer4(){
    const operator = document.getElementById("yAnswer4").value;

    if(operator === "c"){
        poeng4 = 1;
    }
    else {
        poeng4 = 0
    }
    updateResult();
    document.getElementById("poen4").innerText = "Poeng: " + poeng4
}


document.getElementById("svar1").addEventListener("click", chooseAnswer1);
document.getElementById("svar2").addEventListener("click", chooseAnswer2);
document.getElementById("svar3").addEventListener("click", chooseAnswer3);
document.getElementById("svar4").addEventListener("click", chooseAnswer4);

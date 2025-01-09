let poeng = 0


let totalPoeng = 4

let Anwers = ["a", "d", "c", "b"]

function updateResult() {
    const totalScore = poeng;
    document.getElementById("resultat").innerText = 'Du fikk ' + totalScore + ' av ' + totalPoeng + ' Poeng';
}



function chooseAnswer(nr){
    let operator = document.getElementById("yAnswer" + (nr+1)).value;

    if(operator === Anwers[nr]){
        poeng++;
    }
    else {
        poeng;
    }
    updateResult();
    document.getElementById("poen"+(nr+1)).innerText = "Poeng: 1" 
}



document.getElementById("svar1").addEventListener('click', function() {
    chooseAnswer(0);
    var button = document.getElementById("svar1");
    button.disabled = true;
});

document.getElementById("svar2").addEventListener('click', function() {
    chooseAnswer(1);
    var button = document.getElementById("svar2");
    button.disabled = true;
});

document.getElementById("svar3").addEventListener('click', function() {
    chooseAnswer(2);
    var button = document.getElementById("svar3");
    button.disabled = true;
});

document.getElementById("svar4").addEventListener('click', function() {
    chooseAnswer(3);
    var button = document.getElementById("svar4");
    button.disabled = true;
});


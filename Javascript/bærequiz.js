let poeng = 0
let totalPoeng = 0

document.getElementById("svar").addEventListener("click", chooseAnswer1, chooseAnswer2, chooseAnswer3, chooseAnswer4);

function chooseAnswer1(){
    const operator = document.getElementById("yAnswer").value;

    let result;

    switch (operator){
        case 'a':
            totalPoeng++;
            break;

        case 'b':
            totalPoeng++;
            poeng++;
            break;

        case 'c':
            totalPoeng++;
            break;
    
        case 'd':
            totalPoeng++;
            break;

        default:
            result = "Velg svar"
    }
}

function chooseAnswer2(){
    const operator = document.getElementById("yAnswer2").value;

    let result;

    switch (operator){
        case 'a':
            totalPoeng++;
            break;

        case 'b':
            totalPoeng++;
            break;

        case 'c':
            totalPoeng++;
            poeng++;
            break;
    
        case 'd':
            totalPoeng++;
            break;

        default:
            result = "Velg svar"
    }
}

function chooseAnswer3(){
    const operator = document.getElementById("yAnswer3").value;

    let result;

    switch (operator){
        case 'a':
            totalPoeng++;
            poeng++;
            break;

        case 'b':
            totalPoeng++;
            poeng++;
            break;

        case 'c':
            totalPoeng++;
            break;
    
        case 'd':
            totalPoeng++;
            break;

        default:
            result = "Velg svar"
    }
}

function chooseAnswer4(){
    const operator = document.getElementById("yAnswer4").value;

    let result;

    switch (operator){
        case 'a':
            totalPoeng++;
            break;

        case 'b':
            totalPoeng++;
            poeng++;
            break;

        case 'c':
            totalPoeng++;
            break;
    
        case 'd':
            totalPoeng++;
            poeng++;
            break;

        default:
            result = "Velg svar"
    }
}

document.getElementById("resultat").innerText = 'Du fikk' + poeng + "av" + totalPoeng + "poeng"
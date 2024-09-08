let inputAdultos = document.getElementById("adultos");
let inputCrianças = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {

    let adultos = inputAdultos.Value;
    let criancas = inputCrianças.Value;
    let duracao = inputDuracao.value;


    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);   
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalbebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);  

    resultado.innerHTML = `<p>${qdtTotalCarne}g de carne</p>`
    resultado.innerHTML += `<p>${qdtTotalCerveja}ml de cerveja</p>`
    resultado.innerHTML += `<p>${qdtTotalBebidas}ml de Bebidas</p>`

}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
    
    }
    
    function cervejaPP(duracao) {
        if(duracao >= 6) {
            return 2000;
        } else {
            return 1200;
        }
    }
    
        function bebidasPP(duracao) {
            if(duracao >= 6) {
                return 1500;
            } else {
                return 1000;
            }
        }
        
        


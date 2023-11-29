//Atividade da Calculadora
function calcular() {
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)

    let som = (num1 + num2);
    let sub = (num1 - num2);
    let mul = (num1 * num2);
    let div = (num1 / num2);

    document.getElementById("soma").innerHTML = `Soma : ${som}`
    document.getElementById("subtracao").innerHTML = `Subtração : ${sub}`
    document.getElementById("multiplicacao").innerHTML = `Multiplicação : ${mul}`
    document.getElementById("divisao").innerHTML = `Divisão : ${div}`
}

//Atividade de Mudar Tema

let titulo = document.getElementById("titulo");
let paragrafo = document.getElementById("paragrafo");
let body = document.getElementById("body")

function lightDark() {
    if (body.style.backgroundColor == "white") {
        titulo.style.color = "white"
        paragrafo.style.color = "white"
        body.style.backgroundColor = "black"

    } else {
        titulo.style.color = "black"
        paragrafo.style.color = "black"
        body.style.backgroundColor = "white"

    }


}

function mostrarResultado(resultado){
    document.getElementById("resultado").value = resultado;
}

function suma(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1+numero2);
}
function resta(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1-numero2);
}
function multiplicacion(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1*numero2);
}
function division(){
    let numero1 = +document.getElementById("campo1").value;
    let numero2 = +document.getElementById("campo2").value;
    mostrarResultado(numero1/numero2);
}
function potencia(){
    let base = +document.getElementById("campo1").value;
    let exponente = +document.getElementById("campo2").value;
    mostrarResultado(Math.pow(base,exponente));
}
function raiz(){
    let numero = +document.getElementById("campo1").value;
    mostrarResultado(Math.sqrt(numero));
}
function absoluto(){
    let numero = +document.getElementById("campo2").value;
    mostrarResultado(Math.abs(numero));
}
function aleatorio(){
    let minimo = +document.getElementById("campo1").value;
    let maximo = +document.getElementById("campo2").value;
    mostrarResultado(Math.floor(Math.random()*(maximo - minimo +1)+minimo));
}

function redondeo(){
    let resultado = document.getElementById("resultado").value; 
    alert(Math.round(resultado));
}
function techo(){
    let resultado = document.getElementById("resultado").value; 
    alert(Math.ceil(resultado));
}
function piso(){
    let resultado = document.getElementById("resultado").value; 
    alert(Math.floor(resultado));
}
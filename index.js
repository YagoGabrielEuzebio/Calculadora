function insert(x)
{
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML += x
}

function clean()
{
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = "";
}

function back()
{
    let resultado = document.querySelector("#resultado").innerHTML; 

    document.querySelector("#resultado").innerHTML = resultado.substring(0, resultado.length - 1 )
}

function calcular() {
    let resultado = document.querySelector("#resultado").innerHTML; 
    
    document.querySelector("#resultado").innerHTML = eval(resultado)
}
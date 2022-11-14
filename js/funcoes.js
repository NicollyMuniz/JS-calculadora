function Adição(){
    //document referese a pagina; O que fica entre "" se chama parametro ou argumento; .value = está pegando o valor daquele elemento
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    //querySelector = Guardar valores de radio box mas, seu parâmetro e diferente, seria assim: input[name='opt']:checked
    resultado = eval(parseInt(n1) + parseInt(n2));
    document.getElementById("mostrar-resultado").innerHTML = resultado;
}

function Subtração(){
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;

    resultado = eval(parseInt(n1) - parseInt(n2));
    document.getElementById("mostrar-resultado").innerHTML = resultado;
}

function Multiplicação(){
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;

    resultado = eval(parseInt(n1) * parseInt(n2));
    document.getElementById("mostrar-resultado").innerHTML = resultado;
}

function Divisão(){
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;

    resultado = eval(parseInt(n1) / parseInt(n2));
    document.getElementById("mostrar-resultado").innerHTML = resultado;
}

function Potencia(){
    base = document.getElementById("base").value;
    expoente = document.getElementById("expoente").value;
    resultado = parseInt(Math.pow(base, expoente));
    document.getElementById("resultado-potencia").innerHTML = resultado;
}

function Raiz(){
    raiz = document.getElementById("raiz").value;
    resultado = parseInt(Math.sqrt(raiz));
    document.getElementById("resultado-raiz").innerHTML = resultado;
}

function Area(){
    base = document.getElementById("base").value;
    altura = document.getElementById("altura").value;
    resultado = eval(parseInt((base * altura)/2));
    document.getElementById("resultado-area").innerHTML = resultado;
}

function Bhaskara(){
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
    delta = eval(parseInt(Math.pow(b, 2) - 4*a*c));
    
    x1 = eval(parseInt(( -b + Math.sqrt(delta)) /2*a));
    x2 = eval(parseInt(( -b - Math.sqrt(delta)) /2*a));
    
    document.getElementById("resultado-x1").innerHTML = x1;
    document.getElementById("resultado-x2").innerHTML = x2;

}
function insere(num){
    document.getElementById('result').value += num;
}

function apagar(){
    document.getElementById('result').value = '0';
}

function voltar(){
    var resultado = document.getElementById('result').value;
    document.getElementById('result').value = resultado.substring(0, resultado.length - 1);
}

function calcular(){
    var resultado = document.getElementById('result').value;
    if(resultado){
      document.getElementById('result').value = eval(resultado);
    }
}
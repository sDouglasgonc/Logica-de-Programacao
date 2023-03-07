//testando if e else

function soma(){
   var numero1 =  document.getElementById("num1")
   var numero2 = document.getElementById("num2")
   var res = document.getElementById("res")


if ( numero1.value.length == 0 && numero2.value.length == 0) {
window.alert("ERRO: Não deixe campos vazios")
} else {
    var n1 = Number(numero1.value)
    var n2 = Number(numero2.value)
    somar = n1 + n2
    res.innerHTML = `O resultado é ${somar}`
}
    
}
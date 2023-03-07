
function contar(){
    const resultado = `Passo: ${contador}`
    var contador = Number(document.getElementById("cont1").value)
    var terminador = Number(document.getElementById("cont2").value)

    do {
        document.getElementById("contagem").innerHTML = resultado
         contador++
    } while (contador <= terminador);
    window.alert("terminado!!")
}

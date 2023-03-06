
function contar(){
    var contador = document.getElementById("cont1")
    var contagem = document.getElementById("contagem")

    var cont = Number(contador.value)
 

    do {
    contagem.innerHTML= `passo:${cont}`
         cont++
    } while (cont <= 10);
    window.alert("terminado!!")
}

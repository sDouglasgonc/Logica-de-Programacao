
function contar(){
    let inicio = Number(document.getElementById("cont2").value)
    let terminador = Number(document.getElementById("cont").value)
    let resultado = ''
    do{
        document.getElementById("contagem").innerHTML += `Passo:${resultado}<br>`
        inicio += 1;
       resultado = inicio + ' ';
    }while(inicio <= terminador )
    window.alert("terminado")
}


function contar(){
    
    let terminador = Number(document.getElementById("cont").value)
    let i = 1
    do{
        document.getElementById("contagem").innerHTML = `Primeiro Passo:1 <br> E <br> Ultimo Passo:${i}`
        i++
    }while(i <= terminador  )
    window.alert("terminado")
}

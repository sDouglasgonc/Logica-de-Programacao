function saibamais() {
    const carro1 = {Modelo:'Le mans <br>', Marca:'Audi <br>', Ano: '2011'}
    var show = document.getElementById("show")
for(let carac in carro1){
 show.innerHTML += `${carac} : ${carro1[carac]}`
}
}
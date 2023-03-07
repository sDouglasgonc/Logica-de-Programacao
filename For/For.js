function saibamais() {
    const carro1 = {modelo:'Le-mans Sedan', marca:'Audi', ano: '2011'}
    var show = document.getElementById("show")
for(let carac in carro1){
 show.innerHTML = `${carac} : ${carro1[carac]}`
}
}
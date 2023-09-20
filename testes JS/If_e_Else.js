function howMany(selectObject) {
    var numeroSelecionadas = 0;
    for (var i = 0; i < selectObject.options.length; i++) {
        if (selectObject.options[i].selected) {
            numeroSelecionadas++;
        }
    }
    return numeroSelecionadas;
}
console.log(howMany(numeroSelecionadas))
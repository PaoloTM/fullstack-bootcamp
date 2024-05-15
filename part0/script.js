let list = []
word = prompt("Ingrese una palabra o numero // escriba 'salir' para finalizar.")
while (word != 'salir') {
    if(word != 'salir') {
        list.push(word)
    }
    word = prompt("Ingrese una palabra o numero // escriba 'salir' para finalizar.")
}


console.log(list)
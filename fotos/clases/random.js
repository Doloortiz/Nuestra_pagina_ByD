const random = Math.floor(Math.random() *3);

const num = Number(prompt("ingrese un numero entre 1 y 3"))

if (num === 1 || num === 2 || num === 3) {
    if (num === random) {
        alert("Ganaste :)")
    } else {
        alert("Perdiste :(")
    }
} else {
    alert("Ingresa una respuesta valida")
}
let operacion = Number(prompt("Que quieres hacer? 1: sumar, 2: restar, 3: multiplicar, 4: dividir"))

let num1 = Number(prompt("Primer numero"))
let num2 = Number(prompt("Segundo numero"))

if (operacion === 1) {
        alert("Resultado:" + (num1 + num2))
    } else if (operacion === 2) {
        alert("Resultado:" + (num1 - num2))
    } else if (operacion === 3) {
        alert("Resultado:" + num1 * num2)
    } else if (operacion === 4) {
     alert("Resultado:" + (num1 / num2))
} else {
    alert("Ingresaste una respuesta invalida")
}
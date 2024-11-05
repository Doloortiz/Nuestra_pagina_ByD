/* function suma (numero1, numero2) {
    return numero1 + numero2
}
let suma1 = suma(2,8)
let suma2 = suma(9,8)
let suma3 = suma(3,10)

let sumaTotal = suma1 + suma2 + suma3

console.log (sumaTotal) */


///SIN TERMINAR
function estacion () {
    let day = Number(prompt ("dia"))
    let month = Number(prompt("mes"))

    if (month === 1 || month === 2) {
        return "verano" ;
    } else if (month === 3) {
       if (day < 21) {
            return "verano";
       } else {
            return "otoño"
       }
    } else if (month === 4 || month === 5) {
        return "otoño";
    } else if (month === 6) {
        if (day < 21) {
            return "otoño";
        } else {
            return "invierno"
        }
    } else if (month === 7 || month === 8) {
        return "invierno";
    } else if (month === 9) {
        if (day < 21) {
            return "invierno" 
        } else {
            return "primavera"
        }
    } else if (month === 10 || month === 11) {
        return "primavera";
    } else if (month === 12) {
        if (day < 21) {
            return "primavera"
        } else {
            return "verano"
        }
    }
}

const estacionActual = estacion ();

alert(estacionActual);
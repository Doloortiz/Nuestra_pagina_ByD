//IF, ELSE IF, ELSE

//sacar quokka (quokka solo se usa si nosotros ponemos el valor de la variable, ejemplo la nota=para ver si funciona)

const nota = prompt("ingresa la nota");

if(nota >= 7) {
    console.log("te sacaste A")
} else if (nota >= 4) {
    console.log("te sacaste B")
} else {
    console.log("te sacaste C")
}
let calificacion = 4 //CON QUOKKA VER
switch (calificacion) {
    case 1:
    console.log ("muy deficiente");
    break;
    case 2: 
    console.log ("insuficiente");
    break;
    case 3:
    console.log ("suficiente");
    break;
    case 4: 
    console.log ("notable");
    break;
    default:
    console.log ("calificacion invalida");
}

//////
for (let i = 0; i < 3; i++) {
    console.log (i)
}

/////// ver en navegador, no quokka
let edad = prompt ("cual es mi edad?")
while (edad !== "18") {
    console.log ("equivocado");
    edad =  prompt ("cual es mi edad?");
}
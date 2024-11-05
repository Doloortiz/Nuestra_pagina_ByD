//NO ANDAN 

let user = {
    name: "Dolores",
    lastName: "Ortiz",
    age: 18,
};
console.log('${user.name}');



const equipos = {
    boca: {
        nombre: "boca",
      titulos: 65612,
      estadio: "Bombonera",
      idolo: "Roman",
    },

    colon: {
        nombre: "colon",
        titulos: 43,
        estadio: "Cementerios",
        idolo: "Julio",
    },
}

let equipo = prompt("pon equipo")
let propiedad = prompt("pon propiedad")

alert('Mi equipo es ${equipos[equipo].nombre} y mi idolo es ${equipos[equipo][propiedad]}');
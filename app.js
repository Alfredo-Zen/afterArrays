import {
    arrayMap,
    arrayEvery,
    arrayFilter,
    arrayReduce,
    arraySome,
    arraySort,
    arrayFindIndexANDsplice,
} from './arrays.js'

//hacemos una llamada y trabajamos con los datos

const DatosJson = async () => {
    // funcion asyncrona
    let datos = await fetch('./date.json') //fetch es una promesa ponemos await para que espere a que se resuelva la promesa
    let resultados = await datos.json() //convertimos el resultado en json
    practicandoArrays(resultados)
}
DatosJson() //llamamos a la funcion

function practicandoArrays(personajes) {
    arrayMap(personajes) // MAP
    arrayReduce(personajes) // REDUCE
    arrayFilter(personajes) // FILTER
    arraySort(personajes) // SORT
    arrayEvery(personajes) // EVERY
    arraySome(personajes) // SOME
    arrayFindIndexANDsplice(personajes) // FINDINDEX AND SPLICE
    PintarPersonajesDOM(personajes) // PINTAR PERSONAJES EN DOM
}

const PintarPersonajesDOM = (personajes) => {
    //DOOM
    const Card_Container = document.querySelector('.card_Container') //seleccionamos el contenedor

    personajes.forEach((e) => {
        //recorremos el array
        const card = document.createElement('div') //creamos un div
        card.classList.add('card') //añadimos una clase al div
        card.innerHTML =
            //añadimos el html
            `   
            <div class="card-body">
                <p>${e.name}</p>
                <p>${e.height}</p>
                <p>${e.mass}</p>
                <p>${e.eye_color}</p>
            </div>
        `
        Card_Container.appendChild(card) //añadimos el div al contenedor
    })
}

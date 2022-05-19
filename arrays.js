const arrayMap = (personajes) => {
    //***MAP***
    //1. obtener todos los nombres del array
    const allNames = personajes.map((e) => e.name)

    //2. obtener todos las alturas del array

    const allHeights = personajes.map((e) => e.height)

    //3. obtener todos los nombres y alturas como objeto
    const allNamesAndHeights = personajes.map((e) => {
        return {
            name: e.name,
            height: e.height,
        }
    })

    //4. obtener todos los primeros nombres del array

    const allFirstName = personajes.map((e) => e.name.split(' ')[0])
}

const arrayReduce = (personajes) => {
    //***REDUCE***
    //1. obtener el total de mass de todos los personajes

    const totalMass = personajes.reduce((acc, e) => acc + e.mass, 0)

    //2. obtener el total de altura de todos los personajes

    const totalAltura = personajes.reduce((acc, e) => acc + e.height, 0)

    //3. obtener el numero total de color de ojos de todos los personajes

    const totalNumberEYE = personajes.reduce((acc, e) => {
        const color = e.eye_color
        if (acc[color]) {
            acc[color]++
        } else {
            acc[color] = 1
        }
        return acc
    }, {})

    //4. obtener el numero total de nombres de todos los personajes
    const totalNameCaracter = personajes.reduce(
        (acc, e) => acc + e.name.length,
        0
    )
}

const arrayFilter = (personajes) => {
    //***FILTER***
    //1. filtra los personajes donde mass sea mayor a 100

    const filterMAss = personajes.filter((e) => e.mass > 100)

    //2. filtra los personajes donde height sea menor a 200

    const filterHeight = personajes.filter((e) => e.height < 200)

    //3. filtra los personajes male

    const filterMale = personajes.filter((e) => e.gender === 'male')

    //4. Filtra los personajes famale

    const filterFamale = personajes.filter((e) => e.gender === 'famale')
}

const arraySort = (personajes) => {
    //***SORT***
    //1.Ordenar por mass
    const sortMass = personajes.sort((a, b) => b.mass - a.mass)

    //2.Ordenar por height

    const sortHeight = personajes.sort((a, b) => a.height - b.height)

    //3.Ordenar por name

    const sortName = personajes.sort((a, b) => {
        if (a.name > b.name) return 1
        return -1
    })

    //4.Ordenar por gender

    const sortGender = personajes.sort((a, b) => {
        if (a.gender === 'famale') return 1
        return -1
    })
}

const arrayEvery = (personajes) => {
    //***EVERY***
    //1.saber si todos los personajes tienen los ojos blue
    const allBlueEyes = personajes.every((e) => e.eye_color === 'blue')

    //2.saber si todos los personajes tienen mass mayor a 40

    const allMassMayor40 = personajes.every((e) => e.mass > 40)

    //3.saber si todos los personajes tienen la ultura menor a 200
    const allHeight = personajes.every((e) => e.height < 200)

    //4.saber si todos los personajes son hombres

    const allGenderMale = personajes.every((e) => e.gender === 'male')
}

const arraySome = (personajes) => {
    //***SOME***
    //1.pregunta si al menos hay un personaje hombre

    const oneMalePj = personajes.some((e) => e.gender === 'male')

    //2.pregunta si al menos hay un personaje con ojos blue

    const oneBlueEyes = personajes.some((e) => e.eye_color === 'blue')

    //3.pregunta si al menos hay un personaje con altura mayor a 210

    const oneHeightMayor210 = personajes.some((e) => e.height > 210)

    //4.pregunta si al menos hay un personaje con mass menor a 50

    const OneMassMenor50 = personajes.some((e) => e.mass < 50)
}

const arrayFindIndexANDsplice = (personajes) => {
    //findIndex y splice
    const index = personajes.findIndex((e) => e.id === 2)

    //eliminamos mediante el indice que nosotros le pasamos
    //personajes.splice(index, 1)
}

export {
    arrayMap,
    arrayReduce,
    arrayFilter,
    arraySort,
    arrayEvery,
    arraySome,
    arrayFindIndexANDsplice,
} //exportamos todas las funciones

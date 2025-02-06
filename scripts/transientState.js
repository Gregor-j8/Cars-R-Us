 const transientState = {
    "wheelsId": 0,
    "interiorsId": 0,
    "technologiesId": 0,
    "paintsId": 0,
}

export const placeOrder = async () => {
        const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/carOrder", postOptions)

}


export const setWheelChoice = (chosenWheel) => {
    transientState.wheelsId = parseInt(chosenWheel)
    console.log(transientState)
}
export const setInteriorChoice = (chosenInterior) => {
    transientState.interiorsId = parseInt(chosenInterior)
    console.log(transientState)
}
export const setTechnologyChoice = (chosentechnology) => {
    transientState.technologiesId = parseInt(chosentechnology)
    console.log(transientState)
}
export const setPaintChoice = (chosenPaint) => {
    transientState.paintsId = parseInt(chosenPaint)
    console.log(transientState)
}
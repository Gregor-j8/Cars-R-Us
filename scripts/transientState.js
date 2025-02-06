 const transientState = {
    "wheelId": 0,
    "interiorId": 0,
    "technologyId": 0,
    "paintId": 0,
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
    transientState.wheelId = parseInt(chosenWheel)
    console.log(transientState)
}
export const setInteriorChoice = (chosenInterior) => {
    transientState.interiorId = parseInt(chosenInterior)
    console.log(transientState)
}
export const setTechnologyChoice = (chosentechnology) => {
    transientState.technologyId = parseInt(chosentechnology)
    console.log(transientState)
}
export const setPaintChoice = (chosenPaint) => {
    transientState.paintId = parseInt(chosenPaint)
    console.log(transientState)
}
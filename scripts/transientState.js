 const transientState = {
    "WheelsId": 0,
    "InteriorsId": 0,
    "TechnologiesId": 0,
    "PaintsId": 0,
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
    transientState.WheelsId = parseInt(chosenWheel)
    console.log(transientState)
}
export const setInteriorChoice = (chosenInterior) => {
    transientState.InteriorsId = parseInt(chosenInterior)
    console.log(transientState)
}
export const setTechnologyChoice = (chosentechnology) => {
    transientState.TechnologiesId = parseInt(chosentechnology)
    console.log(transientState)
}
export const setPaintChoice = (chosenPaint) => {
    transientState.PaintsId = parseInt(chosenPaint)
    console.log(transientState)
}
import { setInteriorChoice } from "./transientState.js"

export const renderInterior = async () => {
    const fetchInterior = await fetch('http://localhost:8088/interiors')
    const interiors = await fetchInterior.json()
    document.addEventListener("change", changeInterior)


    let interiorHTML = '<select id="interior"><option value="0">interior</option>'
    interiors.map(interior => {
        interiorHTML += `<option value="${interior.id}">${interior.interior}</option>`
    })
 
    return interiorHTML + '</select>'
 }

 const changeInterior = (changeEvent) => { 
    if (changeEvent.target.id === "interior") {
       const chosenOption = changeEvent.target.value
       setInteriorChoice(parseInt(chosenOption))
    }
}
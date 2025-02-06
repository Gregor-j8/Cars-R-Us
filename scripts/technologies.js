import { setTechnologyChoice } from "./transientState.js"

export const renderTechnologys = async () => {
    const fetchTechnologys = await fetch('http://localhost:8088/Technologies')
    const technologys = await fetchTechnologys.json()
    document.addEventListener("change", changeTechnology)


    let technologysHTML = '<select id="technology"><option value="0">technology packages</option>'
    const tech = technologys.map(tech => {
    return `<option value="${tech.id}">${tech.technology}</option>`
    }).join("")
 
    return technologysHTML + tech + '</select>'
 }

 const changeTechnology = (changeEvent) => { 
    if (changeEvent.target.id === "technology") {
       const chosenOption = changeEvent.target.value
       setTechnologyChoice(parseInt(chosenOption))
    }
 }
import { setPaintChoice } from "./transientState.js"

export const renderPaints= async () => {
    const fetchPaints = await fetch('http://localhost:8088/Paints')
    const paints = await fetchPaints.json()
    document.addEventListener("change", changePaint)
 
    let paintHTML = '<select id="paint"><option value="0">Paint colors</option>'
    paints.map(paint => {
     paintHTML += `<option value="${paint.id}">${paint.color}</option>`
    })
 
    return paintHTML + '</select>'
 }

 const changePaint = (changeEvent) => { 
     if (changeEvent.target.id === "paint") {
        const chosenOption = changeEvent.target.value
        setPaintChoice(parseInt(chosenOption))
     }
  }
import { setWheelChoice } from './transientState.js'

export const renderWheels = async () => {
   const fetchWheels = await fetch('http://localhost:8088/Wheels')
   const wheels = await fetchWheels.json()
   document.addEventListener("change", changeWheel)

   let wheelHTML = '<select id="wheel"><option value="0">Wheels</option>'
   wheels.map(wheel => {
    wheelHTML += `<option value="${wheel.id}">${wheel.wheel}</option>`
   })

   return wheelHTML + '</select>'
}

const changeWheel = (changeEvent) => { 
    if (changeEvent.target.id === "wheel") {
       const chosenOption = changeEvent.target.value
       setWheelChoice(parseInt(chosenOption))
    }
 }
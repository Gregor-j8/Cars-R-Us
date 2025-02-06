import { placeOrder } from "./transientState.js"
     
const submitBtn = (clickEvent) => {
   if (clickEvent.target.id === "submit") {
       placeOrder()
   }
}


export const orderBtn = () => {

   document.addEventListener("click", submitBtn)

    return "<button id='submit'>Place Order</button>"
}
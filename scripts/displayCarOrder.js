export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/carOrder?_expand=Paints&_expand=Interiors&_expand=Wheels&_expand=Technologies")
    const carOrders = await fetchResponse.json()

    let ordersHTML = carOrders.map(car => {
        const orderPrice = car.paint.price + car.interior.price + car.wheel.price + car.technology.price
             return `<div>Order #${car.id} cost $${orderPrice}</div>`
        }).join("")

    return ordersHTML
}
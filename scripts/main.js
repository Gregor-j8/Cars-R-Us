import { renderInterior } from './interior.js'
import { Orders } from './displayCarOrder.js'
import { renderPaints } from './paints.js'
import { renderTechnologys } from './technologies.js'
import { renderWheels } from './wheels.js'
import { orderBtn } from './order.js'


const render = async () => {
    const wheels = await renderWheels()
    const interiors = await renderInterior()
    const technologys = await renderTechnologys()
    const paints = await renderPaints()
    const order = await Orders()
    const orderButton = await orderBtn() 
    
    const container = document.getElementById('container')

    const HTML = `<h1>Cars r us</h1>

    <article class="cars">
        <section class="choices__technologies options">
            <h2>technologys</h2>
            ${technologys}
        </section>

        <section class="choices__sizes options">
            <h2>interiors</h2>
            ${interiors}
        </section>

        <section class="choices__styles options">
            <h2>Paints</h2>
            ${paints}
        </section>
    </article>

    <article class="order">
    <h2>Wheels</h2>
    ${wheels}
    </article>
    <article class="order">
    ${orderButton}
    </article>
    <article class="order">
    ${order}
    </article>`

    container.innerHTML = HTML
}

render()

'use strict';

const STEP_DELAY = 750

/*
 * Continuously add exclamation points (!) to an element. Add a new exclamation point every STEP_DELAY milliseconds
 */
function exclaim(el) {
    setTimeout(function step() {
        el.innerText += "!"

        setTimeout(step, STEP_DELAY)
    }, STEP_DELAY)
}

let hosts = document.getElementsByClassName("shadow-host")
for (let host of hosts) {
    let el = host.shadowRoot.getElementById("message")
    exclaim(el)
}

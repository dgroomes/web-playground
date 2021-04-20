'use strict';

const STEP_DELAY = 750;

let messageEl = document.getElementById("message")

/*
 * Continuously add exclamation points (!) to an element. Add a new exclamation point every STEP_DELAY milliseconds
 */
function exclaim(el) {
    setTimeout(function step() {
        el.innerText += "!"

        setTimeout(step, STEP_DELAY)
    }, STEP_DELAY)
}

exclaim(messageEl)

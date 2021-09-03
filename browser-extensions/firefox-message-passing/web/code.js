// Set up a click listener on the "send message" button to send messages to the window and set up a listener to wait for
// an eventual response back. Specifically, we are illustrating that the message will be received by the content-script,
// but it's necessary to know that the message is being broadcast to the window at large. We can't target messages to be
// sent directly to the content script. Any listener–not just the content script–is able to listen for messages.

console.log("[code.js] Initializing...")

let sendMessageButton = document.getElementById("send-message")
sendMessageButton.addEventListener("click", function () {
    let payload = {
        greeting: "Hello there!",
        chainOfCustody: ["code.js"]
    }
    console.log(`[code.js] Broadcasting a message to the window: ${jsonify(payload)}`)
    window.postMessage(payload, "*")
})

window.addEventListener("message", function (message) {
    let payload = simpleClone(message.data) //  Deep clone the message's data object because of the side-effecting problem with window event listeners. See the README.
    let lastCustody = payload.chainOfCustody[payload.chainOfCustody.length - 1]

    if (lastCustody !== "code.js") { // Ignore messages that were sent from the web page. Otherwise, there would be an infinite loop.
        console.log(`[code.js] Received a message from the window: ${jsonify(payload)}`)
        payload.chainOfCustody.push("code.js")
        console.log(`[code.js] The message has exchanged custody for the last time. Here it is. Notice its chain of custody over time: ${jsonify(payload)}`)
    }
})

/**
 * Deep clone a simple object. This should only be called for simple objects and cloning things like functions, classes
 * and symbols doesn't work.
 */
function simpleClone(obj) {
    return JSON.parse(JSON.stringify(obj))
}

/**
 * JSONify an object. This is especially useful for logging.
 */
function jsonify(obj) {
    return JSON.stringify(obj, null, 2)
}

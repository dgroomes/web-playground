// This code runs in a content-script and relays messages between the web page and the extension's background script.
//
// Listen for messages from the web page and relay them to the background script, and then in turn wait for a response
// from the background script and relay the message back to the web page.

console.log("[content-script.js] Initializing...")

window.addEventListener("message", (message) => {
    let payload = simpleClone(message.data) //  Deep clone the message's data object because of the side-effecting problem with event listeners. See the README.
    let lastCustody = payload.chainOfCustody[payload.chainOfCustody.length - 1]

    if (lastCustody !== "content-script.js") { // Ignore messages that were sent from the content-script. Otherwise, there would be an infinite loop.
        console.log(`[content-script.js] Received a message from the window: ${jsonify(payload)}`)

        payload.chainOfCustody.push("content-script.js")

        console.log(`[content-script.js] Broadcasting a message to the extension messaging system: ${jsonify(payload)}`)
        browser.runtime.sendMessage(null,
            payload,
            null,
            function (response) {
                console.log(`[content-script.js] Received a response via callback from the extension messaging system: ${jsonify(response)}`)

                response.chainOfCustody.push("content-script.js")

                console.log(`[content-script.js] Broadcasting a message to the window: ${jsonify(response)}`)
                window.postMessage(response, "*")
            })
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

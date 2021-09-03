// Listen for messages from the extension messaging system and respond back. Specifically, the content-script will be
// sending messages, but the listener is generic so that's why I call it the "extension messaging system".

console.log("[background.js] Initializing...")

browser.runtime.onMessage.addListener(function (message, _sender, sendResponse) {
    console.log(`[background.js] Received a message from the extension messaging system: ${jsonify(message)}`)

    message.chainOfCustody.push("background.js")

    console.log(`[background.js] Invoking the given callback to send a response back via the extension messaging system: ${jsonify(message)}`)
    sendResponse(message)
})

/**
 * JSONify an object. This is especially useful for logging.
 */
function jsonify(obj) {
    return JSON.stringify(obj, null, 2)
}

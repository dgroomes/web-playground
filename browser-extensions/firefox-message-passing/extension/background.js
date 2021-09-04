// Listen for messages from the extension messaging system and respond back. Specifically, the content-script will be
// sending messages, but the listener is generic so that's why I call it the "extension messaging system".

console.log("[background.js] Initializing...")

browser.runtime.onMessage.addListener(function (message, _sender, sendResponse) {
    console.log(`[background.js] Received a message from the extension messaging system: ${jsonify(message)}`)

    message.chainOfCustody.push("background.js")

    someAsyncFunction()
        .then(() => {
            console.log(`[background.js] Invoking the given callback to send a response back via the extension messaging system: ${jsonify(message)}`)
            sendResponse(message)
        })

    return true // Responding with "true" tells Firefox that we plan to invoke the "sendResponse" function later. Otherwise, "sendResponse" would become invalid.
})

/**
 * This is a toy example of an asynchronous function that takes a second to "do some work", and then complete. The async
 * state is implemented with a Promise.
 *
 * It exists only to exercise the async support of "runtime.onMessage".
 *
 * @return {Promise} a promise that resolves when the
 */
function someAsyncFunction() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`[someAsyncFunction] Done!`)
            resolve()
        }, 1000)
    })
}

/**
 * JSONify an object. This is especially useful for logging.
 */
function jsonify(obj) {
    return JSON.stringify(obj, null, 2)
}

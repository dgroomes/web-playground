// This is an abstraction over the Chrome storage layer.

/**
 * Get the "header text" string
 * @return {Promise<String>} a promise containing the "header text" value
 */
function getHeaderText() {
    return new Promise((resolve) => {
        chrome.storage.sync.get("headerText", (data) => {
            console.log(`Read the following data:`)
            console.log({
                data
            })

            resolve(data.headerText)
        })
    })
}

/**
 * Save the "header text" string
 */
function saveHeaderText(headerText) {
    chrome.storage.sync.set({headerText}, function () {
        console.log(`Saved value '${headerText}'`);
    })
}

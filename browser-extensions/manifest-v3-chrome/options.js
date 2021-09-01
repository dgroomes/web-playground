chrome = chrome || chrome // Re-assign 'chrome' so the IDE doesn't show warnings for all usages
let headerText = document.getElementById("header-text");

// Initialize the message form field with the message value saved in the Chrome storage layer
getHeaderText().then(message => headerText.value = message)

let form = document.getElementById("options-form");
form.addEventListener("submit", event => {
    event.preventDefault() // Prevent a form POST request
    let message = headerText.value
    saveHeaderText(message)
})

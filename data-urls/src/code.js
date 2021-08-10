/**
 * Get some environmental information.
 *
 * This function is just a toy example of something that returns useful data.
 *
 * @return environmental info object containing data like the user timezone.
 */
function environmentalInfo() {

    // Get the user timezone. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
    let dateFormat = new Intl.DateTimeFormat('default')
    let usedOptions = dateFormat.resolvedOptions()
    let timeZone = usedOptions.timeZone // This will be in IANA format like "America/New_York"

    // Get the user language. See https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language
    let language = navigator.language

    let now = new Date().toLocaleString()

    return {
        timeZone,
        language,
        now
    }
}

let infoEl = document.getElementById("environmental-info")
let info = '' // JSON-ified representation of the environmental info
/**
 * Refresh the info and draw it to the page
 */
function refreshEnvironmentalInfo() {
    info = JSON.stringify(environmentalInfo(), null, 2)
    infoEl.innerText = info
}

document.getElementById("refresh-info-button").onclick = refreshEnvironmentalInfo

document.getElementById("download-button").onclick =

    /**
     * This is the interesting part.
     *
     * This function does the following:
     * 1) Creates an ephemeral anchor tag in JavaScript
     * 2) Encodes data into the anchor tag's href (this is the "Data URL" feature)
     * 3) Clicks the element using JavaScript
     *
     * This has the effect of creating a file download in the browser. In Chrome, for example, the download bar at the bottom
     * will show up and a file will have been downloaded called "environmental-info.json".
     */
    function downloadClicked() {
        let el = document.createElement('a')
        el.setAttribute('href', 'data:application/json,' + encodeURIComponent(info))
        el.setAttribute('download', "environmental-info.json")
        el.click()
    }

refreshEnvironmentalInfo()


'use strict';

/**
 * Connect to the IndexedDB database. returns a promise
 * @return {Promise} containing an IndexedDB object (I'm not really sure what this type is).
 */
async function connect() {
    return new Promise((resolve, reject) => {

        // Open the IndexedDB database
        let request = window.indexedDB.open("test-db", 2)

        request.onupgradeneeded = function (event) {
            let db = event.target.result
            // Create an object store (this is like creating a table in a SQL database)
            db.createObjectStore("data", {keyPath: "id"});
        }

        request.onsuccess = event => resolve(event.target.result)

        request.onerror = function (event) {
            reject(`Failed to open an IndexedDB database. ${event.target}`)
        }
    })
}

/**
 * Get a JSON description of an IndexedDB object
 */
function dbDescription(db) {
    let {name, version} = db
    return JSON.stringify({name, version}) // note: map destructuring is some interesting stuff (i.e. mind-bending and I can't remember how to do it).
}

/**
 * Async-ified version of IndexedDB's "transaction"'s "add" method
 *
 * WARNING: the transaction is not handled fully.
 *
 * @param db the IndexedDB instance
 * @param obj the object to add to the database
 */
async function add(db, obj) {
    let transaction = db.transaction(["data"], "readwrite")

    let request = transaction.objectStore("data").add(obj)

    return new Promise((resolve, reject) => {
        transaction.onsuccess = event => resolve(event)
        transaction.onerror = event => reject(event)

        request.onsuccess = () => resolve()
        request.onerror = event => reject(event)
    })
}

/**
 * Async-ified version of IndexedDB's "transactions"'s "getAll" function
 * @return {Promise<void>}
 * @param db the IndexedDB instance
 * @return {Array}
 */
async function getAll(db) {
    let transaction = db.transaction(["data"], "readonly")

    let request = transaction.objectStore("data").getAll()
    return new Promise((resolve, reject) => {
        request.onsuccess = event => resolve(event.target.result)
        request.onerror = event => reject(event)
    })
}

/**
 * The program's main function
 */
async function main() {
    // Create the database
    let db = await connect()
    let description = `Connected to the database! ${dbDescription(db)}`;
    let el = document.getElementById("terminal-output")
    el.innerText = description

    // Add some data!
    let date = new Date();
    let id = date.valueOf() // let's use the current timestamp (epoch millis) as a unique identifier for the entry
    let message = `Hello world! The time is ${date}`;
    await add(db, {id, message})

    // Read the data!
    // This will read the object that we just added in the previous statement and all of the older objects we added in
    // previous times this page was loaded. This illustrates how IndexedDB can persist data across user sessions (page visits).
    let messages = await getAll(db)
    for (let message of messages) {
        el.innerText += JSON.stringify(message) + "\n"
    }
}

// noinspection JSIgnoredPromiseFromCall
main()

// Introduced in ES6 to improve asynchronous code readability and manageability.
// Represents the eventual completion (or failure) of an asynchronous operation.
// Initially in a pending state, it transitions to either a fulfilled state (resolved) or a rejected state.
// Holds a single value (upon fulfillment) or an error object (upon rejection).

// resolve(value):
// A function used internally within the Promise constructor.
// Signals that the asynchronous operation completed successfully.
// Takes a single argument, which becomes the resolved value of the Promise.
// Once called, the Promise transitions from pending to fulfilled, and the .then() handlers are executed with the provided value.

// reject(error):
// Another function used internally within the Promise constructor.
// Signals that the asynchronous operation encountered an error.
// Takes a single argument, typically an Error object, which becomes the rejection reason of the Promise.
// Once called, the Promise transitions from pending to rejected, and the .catch() handler is executed with the provided error.

// .then() and .catch() methods for handling successful and failed results.

// .then(onFulfilled, onRejected):
// A method attached to a Promise object used to handle its eventual outcome.
// Takes two optional arguments:
// onFulfilled: A function to be executed if the Promise is fulfilled. This function receives the resolved value as its argument.
// onRejected: A function to be executed if the Promise is rejected. This function receives the rejection reason (error) as its argument.
// Returns a new Promise that reflects the outcome of the original Promise.

// .catch(onRejected):
// A shorthand for .then(null, onRejected).
// Provides a way to handle only rejection without a separate handler for fulfillment.
// Takes a single argument, a function to be executed if the Promise is rejected.

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Data fetched!" };
            // resolve(data);
            reject({ message: "Input correct credentials!" });
        }, 1000); // Simulate network delay
    });
}

fetchData()
    .then((data) => console.log("Data:", data))  // Handle fulfilled state
        // (error) => console.error("Error:", error)) // Handle rejected state (optional)
    .catch((error) => console.error("Error:", error));
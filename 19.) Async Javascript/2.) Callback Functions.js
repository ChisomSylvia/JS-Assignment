// Callback is a function passed as an argument to be executed when the operation finishes.

function fetchData(callback) {
    const data = { message: "Data fetched!" };
    setTimeout(() => {
        callback(data);
    }, 5000); // Simulate network delay
}

function callback1(data) {
    console.log("Data:", data);
}
// passing in an arrow function as the callback
fetchData(callback1);
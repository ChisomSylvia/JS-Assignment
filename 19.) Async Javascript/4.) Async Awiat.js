// async function:
// Declares an asynchronous function.
// When encountered, the JavaScript engine understands that the function involves asynchronous operations.
// The function always returns a Promise, even if you don't explicitly return one.

// await keyword:
// Used only within an async function.
// Pauses the execution of the async function at that point until the awaited Promise resolves.
// The await keyword can only be used before Promises.
// Once the awaited Promise resolves, the await expression evaluates to the resolved value, and the async function continues execution.
// If the awaited Promise rejects, the async function throws the rejection reason as an error.

// Error Handling:
// You can use a try...catch block within an async function to handle potential errors thrown by awaited Promises.

async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data'); // Await the fetch Promise
        const data = response.json(); // Await the json() Promise (assuming response is successful)
        console.log("Data:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}

await fetchData();


// ASSIGNMENT
// Develop a program that fetches data from multiple APIs asynchronously and displays the combined results.
// Implement the program using both Promises and Async/Await for handling asynchronous operations.
// Include proper error handling for API failures.
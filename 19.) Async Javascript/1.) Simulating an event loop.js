// What is Asynchronous Programming? - Programs that can execute tasks without blocking the main thread.

function task1() {
    console.log("Task 1 (Sync)");
}

function task2() {
    console.log("Task 2 (Async)");
    setTimeout(() => console.log("Task 2 - Callback"), 1000); // Simulate async operation
}

function task3() {
    console.log("Task 3 (Sync)");
}

task1()
task2()
task3()
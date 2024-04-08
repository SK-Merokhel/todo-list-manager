#!/usr/bin/env node

import inquirer from "inquirer";

// Initialize an empty array to store the to-do list items
let todoList = [];

// Initialize the condition variable to control the while loop
let condition = true;

// Continue the loop until condition becomes false
while (condition) {
    // Prompt the user to enter a to-do list item
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What do you want to add to the to-do list?",
            validate:function(input) { // Check if the input is not empty
                if (input.trim() === "") {
                    return "Please enter a task"; // Return error message if input is empty
                }
                return true; 
            }
        },
/*
Inside the validation function:
input.trim() removes any leading or trailing whitespace characters from the user's input.
if (input.trim() === "") checks if the trimmed input is empty. If it is, an error message "Please enter a task" is returned.
If the input is not empty, return true; indicates that the input is valid.
This validation function ensures that the user must enter a non-empty task before proceeding. 
If they attempt to add an empty task, they will receive an error message prompting them to enter a task.
*/

        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more?",
            default: true, // Set default value to true for better user experience
            // In this context, since the default value is true, if the user presses Enter without explicitly selecting "Yes" or "No"
            //The confirmation will default to "Yes"
            //This default behavior can enhance user experience by making it easier for users to continue adding items without having to explicitly choose "Yes" each time.
        }
    ]);

    // Add the user's input to the todoLis  t array
    todoList.push(addTask.todo);

    // Update the condition based on the user's response
    condition = addTask.addmore;

    // Log the current state of the to-do list
    console.log(todoList);
}

/*
The code starts by importing the inquirer package, which is used to prompt the user for input.
It initializes an empty array todoList to store the to-do list items and a boolean variable condition to control the while loop.
Inside the while loop, the user is prompted to enter a to-do list item using inquirer.prompt().
The user's input is pushed into the todoList array using the .push() method.
The loop continues based on the user's response to the "Do you want to add more?" question.
The current state of the todoList array is logged to the console after each iteration.
*/
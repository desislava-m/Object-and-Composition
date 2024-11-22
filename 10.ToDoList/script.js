const addButton = document.getElementById("add-button");
const inputField = document.getElementById("todo-input");
let todoList = document.getElementById("todo-list");


addButton.addEventListener("click", function() {
    const task = inputField.value.trim();

    if (task !== "") { // Only add non-empty tasks
        const listItem = document.createElement("li"); // Create a new list item
        listItem.textContent = task; // Set the text content of the list item
    
        todoList.appendChild(listItem);
        inputField.value = "";
    } else {
        alert("Please enter a task")
    }
  });
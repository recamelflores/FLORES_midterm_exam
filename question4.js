//Create a basic CRUD (Create, Read, Update, Delete) system for a list of tasks.

// Task Model
class Task {
    constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
    }
    }
    
    // Array to store tasks
    let tasks = [];
    
    // Create a new task
    function createTask(name, description) {
    const id = tasks.length + 1; // Simple ID generator
    const newTask = new Task(id, name, description);
    tasks.push(newTask);
    console.log(`Task Created: ${newTask.name}`);
    }
    
    // Read all tasks
    function readTasks() {
    if (tasks.length === 0) {
    console.log('No tasks available.');
    } else {
    console.log('Tasks List:');
    tasks.forEach(task => {
    console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
    });
    }
    }
    
    // Update a task by ID
    function updateTask(id, newName, newDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
    task.name = newName || task.name;
    task.description = newDescription || task.description;
    console.log(`Task with ID ${id} updated.`);
    } else {
    console.log(`Task with ID ${id} not found.`);
    }
    }
    
    // Delete a task by ID
    function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
    tasks.splice(index, 1);
    console.log(`Task with ID ${id} deleted.`);
    } else {
    console.log(`Task with ID ${id} not found.`);
    }
    }
    
    // Testing CRUD operations here--------------
    createTask("Javascript", "Description daw ");
    readTasks();
    
    updateTask(1, "JavaScript (Updated)", "Description daw ");
    readTasks();
    
    deleteTask(1);
    readTasks();
    
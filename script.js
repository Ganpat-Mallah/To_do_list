// Select DOM elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const themeToggle = document.getElementById('theme-toggle');

// Add Task
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const taskContent = document.createElement('span');
    taskContent.classList.add('task-text');
    taskContent.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-task');
    deleteButton.textContent = '❌';

    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = '';

    // Mark Task as Complete
    taskContent.addEventListener('click', () => {
        taskContent.classList.toggle('complete');
    });

    // Delete Task
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });
});

// Theme Toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Dark Mode Styles
const style = document.createElement('style');
style.textContent = `
    body.dark-mode {
        background-color: #333;
        color: #f4f4f4;
    }
    body.dark-mode .container {
        background: #444;
    }
    body.dark-mode #task-input {
        background: #555;
        color: #fff;
    }
    body.dark-mode .task-item {
        background: #555;
    }
    body.dark-mode .delete-task {
        background: #ff4d4d;
    }
`;
document.head.appendChild(style);

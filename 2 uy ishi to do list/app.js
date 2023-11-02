const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const tasksList = document.getElementById('tasks');

addTaskButton.addEventListener('click', function () {
    const taskText = taskInput.value;
    if (taskText.trim() === '') {
        alert('Please enter a task.');
        return;
    }
    addTask(taskText);
    taskInput.value = '';
});

function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="deleteButton">Delete</button>
    `;
    const deleteButton = taskItem.querySelector('.deleteButton');    deleteButton.addEventListener('click', function () {    });    tasksList.appendChild(taskItem);}
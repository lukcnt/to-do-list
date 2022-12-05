const addButton = document.querySelector("#add-button");
const taskTitle = document.querySelector("#task-title");
const template = document.querySelector(".template");
const list = document.querySelector("#task-list");

function addTask() {
    let task = taskTitle.value;
    
    if (task) {
        let newTask = template.cloneNode(true);
        
        newTask.querySelector(".task-title").textContent = task;
        newTask.classList.remove("template");
        newTask.classList.remove("hide");
        list.appendChild(newTask);
        document.querySelector("#task-title").value = "";

        let removeButton = newTask.querySelector(".remove-button").addEventListener("click", function() {
            removeTask(this);
        })
    }
}

function removeTask(task) {
    task.parentNode.parentNode.remove(true);
}

addButton.addEventListener("click", function(event) {
    event.preventDefault();
    addTask();
});
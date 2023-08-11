function addTask(){
    var task = document.getElementById("input").value;
    var taskList = document.getElementById("taskList"); 
    if(task==""){
        alert("Invalid Input!");
        return;
    }
    var li = document.createElement("li");
    li.innerHTML = `${task}<span class="delete-btn" onclick="deleteTask(this)">Delete</span>`;
    taskList.appendChild(li);
    task = "";
    document.getElementById("input").value = task;
}
function deleteTask(taskElement){
    var taskList = document.getElementById("taskList");
    taskList.removeChild(taskElement.parentElement);
}
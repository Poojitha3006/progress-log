const taskInput=document.getElementById("taskInput");
const addTaskBtn=document.getElementById("addTaskBtn");
const taskList=document.getElementById("taskList");

let tasks=[];

addTaskBtn.addEventListener("click",function(){
    const task=taskInput.value.trim();
    if (task!==""){
        tasks.push(task);
        taskInput.value="";
        renderTasks();
    }
});
function renderTasks(){
    taskList.innerHTML="";
    tasks.forEach(function(taskText){
        const li=document.createElement("li");
        li.textContent=taskText;
        taskList.appendChild(li);
        });
    }

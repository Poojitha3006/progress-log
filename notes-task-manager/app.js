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
    tasks.forEach(function(taskText,index){
        const li=document.createElement("li");
        const checkbox=document.createElement("input");
        checkbox.type="checkbox";
        checkbox.addEventListener("change",function(){
            if (checkbox.checked){
                li.classList.add("completed");
            }else{
                li.classList.remove("completed");
            }
        });
        const span=document.createElement("span");
        span.textContent=taskText;

        const deleteBtn=document.createElement("button");
        deleteBtn.textContent="🗑️";
        deleteBtn.className="deleteBtn";
        deleteBtn.addEventListener("click",function(){
            tasks.splice(index,1);
            renderTasks();
        });
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        });
    }

const taskInput=document.getElementById("taskInput");
const addTaskBtn=document.getElementById("addTaskBtn");
const taskList=document.getElementById("taskList");
const moreoptions = document.getElementById("moreoptions");
const optionmenu = document.getElementById("optionmenu");

let tasks=[];

moreoptions.addEventListener("click",function(){
    optionmenu.classList.toggle("show");
});
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

        const span= document.createElement("span");
        span.textContent=taskText;

        const editBtn= document.createElement("button");
        editBtn.textContent="edit";
        editBtn.className="editBtn";
        editBtn.addEventListener("click",function(){

            const input=document.createElement("input");
            input.type="text";
            input.value= taskText;

            const saveBtn=document.createElement("button");
            saveBtn.textContent="save";

            saveBtn.addEventListener("click",function(){
                const updatedText=input.value.trim();
                if (updatedText!==""){
                    tasks[index]=updatedText;
                    renderTasks();
                }
            });

            li.innerHTML="";
            li.appendChild(checkbox);
            li.appendChild(input);
            li.appendChild(saveBtn);
        });
    

        const deleteBtn=document.createElement("button");
        deleteBtn.textContent="🗑️";
        deleteBtn.className="deleteBtn";
        deleteBtn.addEventListener("click",function(){
            tasks.splice(index,1);
            renderTasks();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        
        taskList.appendChild(li);
        });
    }

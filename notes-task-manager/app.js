const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const moreoptions = document.getElementById("moreoptions");
const optionmenu = document.getElementById("optionmenu");
const trashBtn = document.getElementById("trash");
const trashContainer = document.getElementById("trashContainer");
const trashList = document.getElementById("trashList");

let tasks = [];
let trashedTasks = [];

moreoptions.addEventListener("click", function () {
    optionmenu.classList.toggle("show");
});

addTaskBtn.addEventListener("click", function () {
    const task = taskInput.value.trim();
    if (task !== "") {
        tasks.push(task);
        taskInput.value = "";
        renderTasks();
    }
});

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(function (taskText, index) {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            li.classList.toggle("completed", checkbox.checked);
        });

        const span = document.createElement("span");
        span.textContent = taskText;

        const editBtn = document.createElement("button");
        editBtn.textContent = "edit";
        editBtn.className = "editBtn";
        editBtn.addEventListener("click", function () {
            const input = document.createElement("input");
            input.type = "text";
            input.value = taskText;

            const saveBtn = document.createElement("button");
            saveBtn.textContent = "save";

            saveBtn.addEventListener("click", function () {
                const updatedText = input.value.trim();
                if (updatedText !== "") {
                    tasks[index] = updatedText;
                    renderTasks();
                }
            });

            li.innerHTML = "";
            li.appendChild(checkbox);
            li.appendChild(input);
            li.appendChild(saveBtn);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑️";
        deleteBtn.className = "deleteBtn";
        deleteBtn.addEventListener("click", function () {
            const removed = tasks.splice(index, 1)[0];
            trashedTasks.push(removed);
            renderTasks();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}

function renderTrash() {
    trashList.innerHTML = "";
    trashedTasks.forEach(function (taskText, index) {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = taskText;

        const restoreBtn = document.createElement("button");
        restoreBtn.textContent = "Restore";
        restoreBtn.addEventListener("click", function () {
            const restored = trashedTasks.splice(index, 1)[0];
            tasks.push(restored);
            renderTasks();
            renderTrash();
        });

        const deleteForeverBtn = document.createElement("button");
        deleteForeverBtn.textContent = "Delete Forever";
        deleteForeverBtn.addEventListener("click", function () {
            trashedTasks.splice(index, 1);
            renderTrash();
        });

        li.appendChild(span);
        li.appendChild(restoreBtn);
        li.appendChild(deleteForeverBtn);
        trashList.appendChild(li);
    });
}

// Toggle trash visibility
trashBtn.addEventListener("click", function () {
    trashContainer.style.display =
        trashContainer.style.display === "none" ? "block" : "none";
    renderTrash();
});

// Initial render
renderTasks();

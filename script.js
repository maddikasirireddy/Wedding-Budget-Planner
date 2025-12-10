function addTask() {
    const taskinput = document.getElementById("task-input");
    const tasklist = document.getElementById("task-list");

    const taskText = taskinput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = () => {
        li.classList.toggle("completed");
    };
  
    const span = document.createElement("span");
    span.textContent = taskText;

  
    const del = document.createElement("button");
    del.textContent = "Delete";
    del.className = "delete-btn";
    del.onclick = () => li.remove();

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(del);

    tasklist.appendChild(li);

    taskinput.value = "";
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

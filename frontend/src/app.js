const API_URL = "/api";

async function loadTasks() {

    const response =
    await fetch(`${API_URL}/tasks`);

    const tasks =
    await response.json();

    const ul =
    document.getElementById("tasks");

    ul.innerHTML = "";

    tasks.forEach(task => {

        const li =
        document.createElement("li");

        li.innerText = task.task;

        ul.appendChild(li);
    });
}

async function addTask() {

    const task =
    document.getElementById("taskInput").value;

    await fetch(`${API_URL}/tasks`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            task
        })
    });

    loadTasks();
}

loadTasks();
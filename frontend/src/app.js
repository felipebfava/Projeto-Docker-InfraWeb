// const API_URL = "/api";
// const API_URL = "http://localhost:3000";
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

        li.innerHTML = `
            ${task.task}
            <button onclick="deleteTask(${task.id})">
                Excluir
            </button>
        `;

        ul.appendChild(li);
    });
}

async function addTask() {

    const task =
        document.getElementById("taskInput").value;

    if (!task.trim()) return;

    await fetch(`${API_URL}/tasks`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            task
        })
    });

    document.getElementById("taskInput").value = "";

    loadTasks();
}

async function deleteTask(id) {

    await fetch(`${API_URL}/tasks/${id}`, {
        method: "DELETE"
    });

    loadTasks();
}

document
    .getElementById("taskInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            addTask();
        }
    });

loadTasks();
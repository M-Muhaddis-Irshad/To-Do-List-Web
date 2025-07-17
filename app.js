function AddTask() {
    var input = document.getElementById("input");
    var taskText = input.value;

    if (taskText.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    document.getElementById("taskList").innerHTML += `
        <li>
            <span class="task-text" onclick="this.classList.toggle('completed')">${taskText}</span>
            <div class="btn-group">
                <button class="edit-btn" onclick="editTask(this)">✏️</button>
                <button class="delete-btn" onclick="this.parentElement.parentElement.remove()">🗑️</button>
            </div>
        </li>
    `;
    input.value = "";
}

function editTask(btn) {
    var span = btn.parentElement.previousElementSibling;

    if (span.isContentEditable) {
        span.contentEditable = "false";
        btn.innerText = "✏️";
    }
    else {
        span.contentEditable = "true";
        span.focus();
        btn.innerText = "✅";
    }
}


document.getElementById("input").addEventListener("keydown",
    function (event) {
        if (event.key === "Enter") {
            AddTask();
        }
    }
);
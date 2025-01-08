
let entireCode = document.querySelector(".entireCode");
let btn = document.querySelector(".btn");
let pendingList = document.querySelector("#pendingList");
let completedList = document.querySelector("#completedList");
let popup = document.querySelector(".popup");
let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector(".addBtn");
let cancelBtn = document.querySelector("cancelBtn");

let pendingTasks = document.querySelector(".pendingTaskCount");
let completedTasks = document.querySelector(".completedTaskCount");

let pendingTaskCount = 0;

btn.addEventListener("click", function () {
    popup.classList.add("active");
    entireCode.classList.add("popupOpacity");
});

taskInput.addEventListener("keydown", (e) => {
    if(e.code == "Enter") {
        addTask();
            popup.classList.remove("active");
            entireCode.classList.remove("popupOpacity");   
    }
});

popup.addEventListener("click", (e) => {
    if (e.target.innerHTML == "Add") {
        if (taskInput.value == "") {
            alert("Enter task first!");
        } else {
            addTask();
            popup.classList.remove("active");
            entireCode.classList.remove("popupOpacity");
        }
    } else if (e.target.innerHTML == "Cancel") {
        popup.classList.remove("active");
        entireCode.classList.remove("popupOpacity");
        taskInput.value = "";
    }
});

function addTask() {
    let newTask = document.createElement("li");
    newTask.innerText = taskInput.value;

    let doneBtn = document.createElement("button");
    doneBtn.classList.add("done");
    doneBtn.innerText = "✓";

    let delBtn = document.createElement("button");
    delBtn.classList.add("delete");
    delBtn.innerText = "✗";

    newTask.appendChild(doneBtn);
    newTask.appendChild(delBtn);
    pendingList.appendChild(newTask);
    taskInput.value = "";

    pendingTaskCount++;
    pendingTasks.innerHTML = `You have ${pendingList.childElementCount}/${pendingTaskCount} pending tasks.`;
    completedTasks.innerHTML = `${completedList.childElementCount}/${pendingTaskCount} tasks completed.`;
}

pendingList.addEventListener("click", function (e) {
    if (e.target.innerHTML == "✗") {
        let task = e.target.parentElement;
        task.remove();
        pendingTaskCount--;
        pendingTasks.innerHTML = `You have ${pendingList.childElementCount}/${pendingTaskCount} pending tasks.`;
        completedTasks.innerHTML = `${completedList.childElementCount}/${pendingTaskCount} tasks completed.`;
    } else if (e.target.innerHTML == "✓") {
        let task = e.target.parentElement;
        task.children[1].remove();
        task.children[0].remove();

        let badge = document.createElement("span");
        badge.setAttribute("class", "badge text-bg-primary");
        badge.innerHTML = "Completed";

        task.appendChild(badge);
        completedList.appendChild(task);

        completedTasks.innerHTML = `${completedList.childElementCount}/${pendingTaskCount} tasks completed.`;
        pendingTasks.innerHTML = `You have ${pendingList.childElementCount}/${pendingTaskCount} pending tasks.`;
    }
});
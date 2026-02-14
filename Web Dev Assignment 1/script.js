const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskDate = document.getElementById("taskdate");
const taskdesc = document.getElementById("taskdesc");

window.onload = function () {
  document.getElementById("dateDisplay").innerText =
    new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
};
document.getElementById("addBtn").addEventListener("click", () => {
  const text = taskInput.value.trim();
  const date = taskDate.value.trim();
  const desc = taskdesc.value.trim();
  if (text) {
    createDOMTask(text, date, desc);
    taskInput.value = "";
  }
});
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") document.getElementById("addBtn").click();
});
function createDOMTask(text, date, desc) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.className = "task-text";
  span.innerText = `Title: ${text} \n\n About: ${desc} \n\n Date: ${date}`;
  const actionsDiv = document.createElement("div");
  actionsDiv.className = "actions";
  const editBtn = document.createElement("button");
  editBtn.className = "btn-mini";
  editBtn.innerText = "Edit";
  editBtn.onclick = function () {
    taskInput.value = span.innerText;
    li.remove();
    taskInput.focus();
  };
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn-mini btn-delete";
  deleteBtn.innerText = "Delete";
  deleteBtn.onclick = function () {
    li.remove();
  };
  actionsDiv.appendChild(editBtn);
  actionsDiv.appendChild(deleteBtn);
  li.appendChild(span);
  li.appendChild(actionsDiv);
  taskList.appendChild(li);
}

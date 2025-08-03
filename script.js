function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.textContent = taskText;
  li.onclick = () => li.classList.toggle("done");

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.style.marginLeft = "10px";
  removeBtn.onclick = (e) => {
    e.stopPropagation();
    li.remove();
  };

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}

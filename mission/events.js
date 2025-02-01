let tasks = [];

function taskTemplate(task) {
  return `
    <li ${task.completed ? 'class="strike"' : ""}>
      <p>${task.detail}</p>
      <div>
        <span data-action="delete">❎</span>
        <span data-action="complete">✅</span>
      </div>
    </li>`;
}

function renderTasks(tasks) {
  // get the list element from the DOM
  const listElement = document.querySelector("#todoList");
  listElement.innerHTML = "";
  // loop through the tasks array. transform (map) each task object into the appropriate HTML to represent a to-do.
  const html = tasks.map(taskTemplate).join("");
  listElement.innerHTML = html;
}

function newTask() {
  // get the value entered into the #todo input
  const taskInput = document.querySelector("#todo");
  const taskText = taskInput.value.trim(); // Fix: Prevents adding empty tasks

  if (taskText === "") {
    alert("Please enter a valid task!"); // Fix: Prevents empty input
    return;
  }

  // add it to our arrays tasks
  tasks.push({ detail: taskText, completed: false });

  // Clear the input field after adding a task
  taskInput.value = "";

  // render out the list
  renderTasks(tasks);
}

function removeTask(taskElement) {
  // Notice how we are using taskElement instead of document as our starting point?
  // This will restrict our search to the element instead of searching the whole document.
  const taskText = taskElement.querySelector('p').innerText;

  // Fix: Properly remove the task from the array
  tasks = tasks.filter((task) => task.detail !== taskText);

  // render the updated task list
  renderTasks(tasks);
}

function completeTask(taskElement) {
  const taskText = taskElement.querySelector('p').innerText;

  // Find the index of the task
  const taskIndex = tasks.findIndex((task) => task.detail === taskText);

  if (taskIndex !== -1) {
    // Toggle completed status
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
  }

  // Fix: Re-render the list instead of just toggling the class
  renderTasks(tasks);
}

function manageTasks(e) {
  // did they click the delete or complete icon?
  console.log(e.target);
  const parent = e.target.closest("li");

  if (!parent) return; // Fix: Prevents errors if clicking outside a task item

  if (e.target.dataset.action === "delete") {
    removeTask(parent);
  } else if (e.target.dataset.action === "complete") {
    completeTask(parent);
  }
}

// Add your event listeners here
document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);

// render the initial list of tasks (if any) when the page loads
renderTasks(tasks);

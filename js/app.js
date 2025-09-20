// js/app.js
import { loadTasks, saveTasks } from './storage.js';
import { renderTasks } from './render.js';
import { initDragDrop, addCardDragListeners } from './dragdrop.js';

let tasks = loadTasks(); // initial state in memory

// simple getters/handlers for drag module
function getTasks() {
  return tasks;
}
function onTasksUpdated(newTasks) {
  tasks = newTasks;
  saveTasks(tasks);
  // re-render and re-attach card drag listeners
  renderTasks(tasks, addCardDragListeners);
}

// init drag & drop (needs callbacks to operate on tasks)
initDragDrop({ getTasks, onUpdate: onTasksUpdated });

// form handling (create tasks)
const form = document.getElementById('task-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleEl = document.getElementById('task-title');
  const descEl = document.getElementById('task-desc');
  const title = titleEl.value.trim();
  const desc = descEl.value.trim();
  if (!title) {
    alert('Please enter a title');
    return;
  }

  const newTask = {
    id: Date.now(),
    title,
    desc,
    status: 'todo'
  };
  tasks.push(newTask);
  saveTasks(tasks);
  renderTasks(tasks, addCardDragListeners);

  form.reset();
  titleEl.focus();
});

// initial render
renderTasks(tasks, addCardDragListeners);

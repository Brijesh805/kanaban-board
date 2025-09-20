// js/dragdrop.js
// This module does NOT own the tasks array. It gets tasks via getTasks()
// and notifies the app through onUpdate(updatedTasks).
let getTasksFn = null;
let onUpdateFn = null;

export function initDragDrop({ getTasks, onUpdate }) {
  getTasksFn = getTasks;
  onUpdateFn = onUpdate;

  // Attach listeners to drop targets (task-lists). We keep them persistent;
  // render will recreate cards but lists remain same.
  const lists = document.querySelectorAll('.task-list');
  lists.forEach(list => {
    list.addEventListener('dragover', handleDragOver);
    list.addEventListener('dragleave', handleDragLeave);
    list.addEventListener('drop', handleDrop);
  });
}

export function addCardDragListeners(cardEl, task) {
  // set draggable attribute (render sets this too)
  cardEl.draggable = true;

  cardEl.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', String(task.id));
    // visual flag
    cardEl.classList.add('dragging');
  });

  cardEl.addEventListener('dragend', () => {
    cardEl.classList.remove('dragging');
    document.querySelectorAll('.task-list.over').forEach(el => el.classList.remove('over'));
  });
}

/* -------- handlers -------- */
function handleDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');
}

function handleDrop(e) {
  e.preventDefault();
  this.classList.remove('over');
  const id = e.dataTransfer.getData('text/plain');
  if (!id) return;

  // get current tasks, mutate the correct task, then notify onUpdate
  const tasks = getTasksFn ? getTasksFn() : [];
  const task = tasks.find(t => String(t.id) === String(id));
  if (!task) return;

  // this element (task-list) has an id matching status (todo|in-progress|done)
  const newStatus = this.id;
  task.status = newStatus;

  // notify app to persist + re-render
  if (onUpdateFn) onUpdateFn(tasks);
}

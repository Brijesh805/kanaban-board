// js/render.js
import { qs, createElement, escapeHtml } from './dom.js';

/**
 * renderTasks(tasks, onCardCreated)
 *   tasks: array of task objects
 *   onCardCreated: function(cardElement, task) - called for each card so caller
 *                 can attach events (dragstart, click etc.)
 */
export function renderTasks(tasks = [], onCardCreated) {
  // clear columns
  ['todo', 'in-progress', 'done'].forEach(id => {
    const container = qs(`#${id}`);
    if (container) container.innerHTML = '';
  });

  // create cards
  tasks.forEach(task => {
    const col = qs(`#${task.status}`) || qs('#todo');
    const card = createElement('div', { className: 'task' });
    card.dataset.id = String(task.id);
    card.draggable = true;

    // safe insertion of user text
    const titleHtml = `<h3>${escapeHtml(task.title)}</h3>`;
    const descHtml = `<p>${escapeHtml(task.desc)}</p>`;
    card.innerHTML = titleHtml + descHtml;

    col.appendChild(card);

    if (typeof onCardCreated === 'function') {
      onCardCreated(card, task);
    }
  });
}

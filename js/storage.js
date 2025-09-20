// js/storage.js
const STORAGE_KEY = 'kanbanTasks_v1';

export function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

export function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Error parsing tasks from storage', err);
    return [];
  }
}

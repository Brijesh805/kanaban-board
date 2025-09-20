// js/dom.js
export function qs(selector, scope = document) {
  return scope.querySelector(selector);
}
export function qsa(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}
export function createElement(tag, { className = '', text = '', html = '' } = {}) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  if (html) el.innerHTML = html;
  return el;
}
// small useful helper to avoid XSS when inserting user text
export function escapeHtml(str = '') {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

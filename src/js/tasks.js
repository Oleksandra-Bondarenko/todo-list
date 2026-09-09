import { nanoid } from 'nanoid';
import { renderTasks } from './render-tasks';
import { LS_KEYS, saveState, getState } from './local-storage-api';

// або зберігається масив з localStorage, або створюється пустий масив (якщо в localStorage нічого немає, getState() повертає null)
let tasks = getState(LS_KEYS.tasks) || [];

export function addTask(event) {
  event.preventDefault();

  const title = event.target.elements.taskName.value.trim();
  const description = event.target.elements.taskDescription.value.trim();

  if (!title || !description) {
    alert('Please, fill all the fields!');
    return;
  }

  const task = { id: nanoid(), title, description };

  // додати в масив
  tasks.push(task);

  // відмалювати на сторінці
  renderTasks(tasks);

  // зберегти в localStorage
  saveState(LS_KEYS.tasks, tasks);

  event.target.reset();
}

export function deleteTask(event) {
  // перевірка, чи натиснули саме на кнопку
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  // or
  //   if (!event.target.classList.contains('task-list-item-btn')) {
  //     return;
  //   }

  const id = event.target.closest('li').id;

  // перезапис масиву на відфільтрований(залишити всі елементи, окрім того, по якому клікнули)
  tasks = tasks.filter(task => task.id !== id);

  // відмалювати розмітку по оновленому масиву
  renderTasks(tasks);

  // зберегти в localStorage оновлений масив
  saveState(LS_KEYS.tasks, tasks);
}

export function initTasks() {
  renderTasks(tasks);
}

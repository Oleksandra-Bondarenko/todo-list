import { nanoid } from 'nanoid';
import { renderTasks } from './render-tasks';
import { LS_KEYS, saveState, getState } from './local-storage-api';

const tasks = getState(LS_KEYS.tasks) || [];

export function addTask(event) {
  event.preventDefault();

  const title = event.target.elements.taskName.value.trim();
  const description = event.target.elements.taskDescription.value.trim();

  if (!title || !description) {
    alert('Please, fill all the fields!');
    return;
  }

  const task = { id: nanoid(), title, description };
  tasks.push(task);

  renderTasks(tasks);

  saveState(LS_KEYS.tasks, tasks);

  event.target.reset();
}

export function initTasks() {
  renderTasks(tasks);
}

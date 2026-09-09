import { refs } from './js/refs';
import { addTask, initTasks, deleteTask } from './js/tasks';

// виклик функції, щоб при відкритті або перезавантаженні сторінки вже збережені дані одразу відображались
initTasks();

refs.form.addEventListener('submit', addTask);
refs.taskList.addEventListener('click', deleteTask);

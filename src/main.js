import { refs } from './js/refs';
import { addTask, deleteTask, initTasks } from './js/tasks';
import { initTheme, toggleBtnClick } from './js/theme-switcher';

initTasks();
initTheme();

refs.form.addEventListener('submit', addTask);
refs.taskList.addEventListener('click', deleteTask);
refs.themeToggleBtn.addEventListener('click', toggleBtnClick);

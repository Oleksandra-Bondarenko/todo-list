// об'єкт із ключами для localStorage
export const LS_KEYS = {
  tasks: 'tasks',
};

// функція для збереження даних у localStorage
export function saveState(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// функція для отримання даних із localStorage
export function getState(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

import { openDB } from 'idb';

const dbPromise = openDB('TaskManagerDB', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('tasks')) {
      db.createObjectStore('tasks', { keyPath: 'id' });
    }
  },
});

export const addTaskToDb = async (task) => {
  const db = await dbPromise;
  return db.put('tasks', task);
};

export const getAllTasksFromDb = async () => {
  const db = await dbPromise;
  return db.getAll('tasks');
};

export const deleteTaskFromDb = async (id) => {
  const db = await dbPromise;
  return db.delete('tasks', id);
};

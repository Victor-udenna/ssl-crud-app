import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { deleteTaskFromDb, getAllTasksFromDb, getTaskFromDb } from '../utils/indexedDbUtils';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const tasks = await getAllTasksFromDb();
  return tasks;
});

export const fetchTaskById = createAsyncThunk('tasks/fetchTaskById', async (id) => {
  const task = await getTaskFromDb(id);
  return task;
});
export const deleteTaskById = createAsyncThunk('tasks/deleteTaskById', async (id, { rejectWithValue }) => {
  try {
    await deleteTaskFromDb(id);
    return id;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    selectedTask: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const { id, updates } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...updates };
      }
    },
    selectTask: (state, action) => {
      state.selectedTask = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchTaskById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTaskById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedTask = action.payload;
      })
      .addCase(fetchTaskById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteTaskById.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload); // Remove task by ID
      })
      .addCase(deleteTaskById.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { addTask, setTasks, deleteTask, selectTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;

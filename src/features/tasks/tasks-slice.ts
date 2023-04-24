import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../models/models';

interface tasksState {
    tasks: Todo[]
}

const initialState: tasksState = {
    tasks: []
};

let ID = 1;

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Omit<Todo, "id" | "completed">>) => {
            state.tasks.push({
                id: (ID++).toString(),
                completed: false,
                ...action.payload
            });
        },
        findTask: (state, action: PayloadAction<string>) => {
            state.tasks.find((task) => task.id === action.payload);
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        completeTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.map((task) =>
                task.id === action.payload ? {...task, completed: !task.completed} : task
            );
        }
    }
});

export const { addTask, deleteTask, completeTask, findTask } = tasksSlice.actions;
export default tasksSlice.reducer;
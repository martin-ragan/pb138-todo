import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/tasks-slice';
import searchTermReducer from '../features/searchTerm/search-term-slice';

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        searchTerm: searchTermReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
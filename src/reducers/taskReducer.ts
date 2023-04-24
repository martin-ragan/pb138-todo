import { Todo } from "../models/models";

export const tasksReducer = (state: Todo[] = [], action: {type: string, payload: any}) => {
    switch (action.type) {
        case 'tasks/addTask':
            return [...state, {
                id: Math.random().toString(36).substr(2, 9),
                ...action.payload
            }];
        case 'tasks/deleteTask':
            return state.filter((task) => task.id !== action.payload);
        case 'tasks/completeTask':
            return state.map((task) =>
                task.id === action.payload ? {...task, completed: !task.completed} : task
            );
        default:
            return state;
    }
}
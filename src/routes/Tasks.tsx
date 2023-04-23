import { TodoList } from '../components/TodoList/TodoList'
import axios from 'axios';
import { Todo } from '../models/models';
import fetcher from '../models/fetcher';
import useSWR from 'swr';
import { AddForm } from '../components/AddForm/AddForm';

export const Tasks = () => {
    const { data: todoData, error, mutate } = useSWR('http://localhost:4000/tasks', fetcher);

    if (error) return <div>failed to load</div>;
    if (!todoData) return <div>loading...</div>;

    const deleteTodo = async (id: string) => {
        mutate(async (todos: Todo[]) => {
            await axios.delete(`http://localhost:4000/tasks/${id}`);

            const newTodos = todos.filter(todo => todo.id !== id)

            return newTodos;
        });
    }

    const addTodo = (data: Omit<Todo, "id" | "completed">) => {
        mutate(async (todos: Todo[]) => {
            const newTask = await axios.post('http://localhost:4000/tasks', {
                data
            });

            return [...todos, newTask.data];
        });
    }

    const changeComplete = (id: string) => {
        mutate(async (todos: Todo[]) => {
            await axios.post(`http://localhost:4000/tasks/${id}/complete`);
            return todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        });
    }
    return (
        <>
            {todoData.length > 0 && <TodoList
                changeComplete={changeComplete}
                deleteTodo={deleteTodo}
                todos={todoData}
            />}

            {todoData.length === 0 && (
                <p className='text-white text-lg tracking-wide'>
                    Yeeey, you don't have any tasks.
                </p>
            )}

            <h2 className='text-white text-2xl tracking mt-24 mb-12 uppercase font-bold'>Add new todo task</h2>
            <AddForm addTodo={addTodo} />
        </>
    )
}
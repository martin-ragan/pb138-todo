import { TodoList } from '../components/TodoList/TodoList'
import { Todo } from '../models/models';
import { AddForm } from '../components/AddForm/AddForm';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addTask, completeTask, deleteTask } from '../features/tasks/tasks-slice';

export const Tasks = () => {

    const todoData = useAppSelector(state => state.tasks.tasks);
    const dispatch = useAppDispatch();
    
    const deleteTodo = async (id: string) => {
        dispatch(deleteTask(id));
    }

    const addTodo = (data: Omit<Todo, "id" | "completed">) => {
        dispatch(addTask(data));
    }

    const changeComplete = (id: string) => {
        dispatch(completeTask(id));
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
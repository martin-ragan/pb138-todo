import { Task } from '../Task/Task'
import { Todo } from '../../models/models';

interface TodoListProps {
    todos: Todo[];
    deleteTodo: (id: string) => void;
    changeComplete: (id: string) => void;
}

export const TodoList = ({ todos, deleteTodo, changeComplete }: TodoListProps) => {
    return (
        <ul className='flex flex-col gap-4 justify-center items-center mb-12'>
            {
                todos.map((todo) => { 
                    return <Task
                        key={todo.id}
                        changeCompleteFn={() => changeComplete(todo.id)}
                        deleteFn={() => deleteTodo(todo.id)}
                        todo={todo}
                    />
                })
            }
        </ul>
    )
};

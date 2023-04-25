import { Link } from "react-router-dom";
import { Todo } from "../../models/models";
import { useAppDispatch } from "../../app/hooks";
import { completeTask, deleteTask } from "../../features/tasks/tasks-slice";

interface TaskProps {
    todo: Todo;
}

export const Task = ({todo}: TaskProps) => {
    const dispatch = useAppDispatch();
    
    const changeComplete = () => {
        dispatch(completeTask(todo.id));
    }

    const deleteTodo = () => {
        dispatch(deleteTask(todo.id));
    }
    
    return (
        <li className="bg-white px-10 py-4 mb-4 shadow-lg w-[45rem] rounded-lg flex items-center justify-between">
            <Link to={`${todo.id}`} className={`text-2xl ${todo.completed ? 'line-through' : ''}`}>{ todo.title }</Link>
            <div>
                <button onClick={deleteTodo} className="bg-red-500 text-white px-4 py-2 rounded-lg">Delete</button>
                {
                    !todo.completed ?
                        <button
                            onClick={changeComplete}
                            className="bg-green-500 text-white px-4 py-2 rounded-lg ml-4"
                        >
                            Complete
                        </button>
                    :
                        <button onClick={changeComplete} className="bg-indigo-500 text-white px-4 py-2 rounded-lg ml-4">
                            Uncomplete
                        </button>
                }
            </div>
        </li>
    )
}

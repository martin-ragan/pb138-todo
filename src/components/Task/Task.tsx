import { Link } from "react-router-dom";
import { Todo } from "../../models/models";

interface TaskProps {
    todo: Todo;
    deleteFn: () => void;
    changeCompleteFn: () => void;
}

export const Task = ({todo, deleteFn, changeCompleteFn}: TaskProps) => {
    return (
        <li className="bg-white px-10 py-4 shadow-lg w-[45rem] rounded-lg flex items-center justify-between">
            <Link to={`${todo.id}`} className={`text-2xl ${todo.completed ? 'line-through' : ''}`}>{ todo.title }</Link>
            <div>
                <button onClick={deleteFn} className="bg-red-500 text-white px-4 py-2 rounded-lg">Delete</button>
                {
                    !todo.completed ?
                        <button
                            onClick={changeCompleteFn}
                            className="bg-green-500 text-white px-4 py-2 rounded-lg ml-4"
                        >
                            Complete
                        </button>
                    :
                        <button onClick={changeCompleteFn} className="bg-indigo-500 text-white px-4 py-2 rounded-lg ml-4">
                            Uncomplete
                        </button>
                }
            </div>
        </li>
    )
}

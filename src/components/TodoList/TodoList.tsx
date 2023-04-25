import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Task } from '../Task/Task'


export const TodoList = () => {
    const searchTerm = useAppSelector(state => state.searchTerm);
    
    const todos = useAppSelector(state => state.tasks.tasks.filter((todo) => {
        return todo.title.toLowerCase().includes(searchTerm.toLowerCase());
    }));

    return (
        <>
            {
                todos.length === 0 && <p className='text-white text-2xl'>Sorry, you don't have any tasks!</p>
            }
            <ul className='flex flex-col overflow-y-auto h-64'>
                {
                    todos.map((todo) => { 
                        return <Task
                            key={todo.id}
                            todo={todo}
                        />
                    })
                }
            </ul>
        </>
    )
};

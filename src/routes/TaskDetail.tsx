import { useParams } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';

export const TaskDetail = () => {
    const { id } = useParams<{ id: string }>();
    const todo = useAppSelector(state => state.tasks.tasks.find(task => task.id === id));
    
    return (
        <>
            <div className="bg-white w-[25rem] rounded px-6 py-4 flex flex-col items-start gap-8 drop-shadow-sm">
                <h1 className='text-2xl font-bold tracking-wide'>{todo?.title}</h1>
                <h3 className='text-xl'><b>Assignee:</b> {todo?.assignee}</h3>
                <p>{todo?.description}</p>
            </div>
        </>
    )
}
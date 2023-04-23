import { useParams } from 'react-router-dom';
import fetcher from '../models/fetcher';
import { Todo } from '../models/models';
import useSWR from 'swr'

export const TaskDetail = () => {
    const { id } = useParams<{ id: string }>();
    const { data: todo, error} = useSWR<Todo>(`http://localhost:4000/tasks/${id}`, fetcher);

    if (error) return <div>failed to load</div>;
    if (!todo) return <div>loading...</div>;

    return (
        <>
            <div className="bg-white w-[25rem] rounded px-6 py-4 flex flex-col items-start gap-8 drop-shadow-sm">
                <h1 className='text-2xl font-bold tracking-wide'>{todo.title}</h1>
                <h3 className='text-xl'><b>Assignee:</b> {todo.assignee}</h3>
                <p>{todo.description}</p>
            </div>
        </>
    )
}
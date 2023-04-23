import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { Todo } from '../../models/models';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

interface AddFormProps {
    addTodo: (newData: Omit<Todo, "id" | "completed">) => void
}

const schema = yup.object({
    title: yup.string().required(),
    assignee: yup.string().required('Custom message for validating required condition'),
    description: yup.string().optional(),
  }).required();

type FormData = yup.InferType<typeof schema>;

export const AddForm = ({addTodo}: AddFormProps) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    
    const onSubmit = (data: FormData) => {
        reset({title: '', assignee: '', description: ''}, {keepValues: false});
        addTodo(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-start gap-4'>
            { errors.title && errors.title.message && <ErrorMessage message={errors.title.message}/> }
            { errors.assignee && errors.assignee.message && <ErrorMessage message={errors.assignee.message}/> }
            <input {...register('title')} className='p-4 rounded-lg text-black w-[25rem] focus:outline-none' type='text' placeholder='type something to do...' />
            <input {...register('assignee')} className='p-4 rounded-lg text-black w-[25rem] focus:outline-none' type='text' placeholder='Whos is this task?' />
            <textarea {...register('description')} className='p-4 rounded-lg text-black w-[25rem] focus:outline-none' placeholder='be more specific...' />
            <button className='rounded-lg font-bold uppercase px-10 py-4 drop-shadow-sm bg-pink-400 ease-in delay-200 transition-all hover:bg-pink-200' type='submit'>
                Add
            </button>
        </form>
    )
}

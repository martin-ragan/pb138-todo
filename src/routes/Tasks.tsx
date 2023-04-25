import { TodoList } from '../components/TodoList/TodoList'
import { AddForm } from '../components/AddForm/AddForm';
import { SearchForm } from '../components/SearchForm/SearchForm';

export const Tasks = () => {
    return (
        <>
            <SearchForm/>
            <TodoList />
            <h2 className='text-white text-2xl tracking mt-24 mb-12 uppercase font-bold'>Add new todo task</h2>
            <AddForm />
        </>
    )
}
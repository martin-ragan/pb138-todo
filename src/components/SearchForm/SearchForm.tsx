import React, { FormEvent } from 'react'
import { useAppDispatch } from '../../app/hooks';
import { setSearchTerm } from '../../features/searchTerm/search-term-slice';

export const SearchForm = () => {
    const dispatch = useAppDispatch();

    function handleChange(event: FormEvent<HTMLInputElement>) {
        event.preventDefault();
        dispatch(setSearchTerm(event.currentTarget.value))
    }
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <input onChange={handleChange} type="text" placeholder="Search..." className='w-[20rem] px-4 py-2 rounded-xl text-lg drop-shadow-sm mb-12' />
    </form>
  )
}

import './App.css'
import { NavLink, Outlet } from 'react-router-dom';


function App() {

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-screen min-h-screen py-12">

      <div className="mx-auto flex flex-col justify-center items-center">
        <h1 className='text-white text-4xl font-bold tracking-wide mb-12'>Todo list app</h1>

        <nav className='mb-24'>
          <ul className='flex gap-4 items-center'>
            <li className='text-white text-lg uppercase'>
              <NavLink to={'/about'}>About</NavLink>
            </li>
            <li className='text-white text-lg uppercase'>
              <NavLink to={'/'}>Tasks</NavLink>
            </li>
          </ul>
        </nav>
        <Outlet/>
      </div>
    </div>
  )
}

export default App

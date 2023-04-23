import { Link } from "react-router-dom"

export const About = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-screen h-screen pt-12">

      <div className="mx-auto flex flex-col justify-center items-center">
        <h1 className='text-white text-4xl font-bold tracking-wide mb-12'>This is todo app</h1>

        <p className="text-lg text-white w-1/2 text-center">This is seminar demo about routing, react hook form, data fetching</p>

        <Link to={'/'} className='bg-white text-indigo-500 px-4 py-2 rounded-lg mt-12'>Go back</Link>
      </div>
    </div>
  )
}

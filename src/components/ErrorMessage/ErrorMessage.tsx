export const ErrorMessage = ({message}: {message: string}) => {
  return (
    <div className='bg-red-400 px-8 py-4 mb-4 rounded-lg flex items-center justify-start'>
        <span className='text-lg text-white tracking-wide font-bold'>{message}</span>
    </div>
  )
}

import React from 'react'

const Error = ({children}) => {
  return (
    <div
    className='bg-red-500 text-white font-bold p-2 text-center rounded-md m-2'
        >
        {children}
    </div>
  )
}

export default Error
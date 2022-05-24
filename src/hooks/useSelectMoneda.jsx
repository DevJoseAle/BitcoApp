import React, { useState } from 'react'



//Custom Hook
const useSelectMoneda = (label, options) => {

    const [state, setState] = useState('')

  
    const SelectMoneda =()=> (
        <>
        
        <label 
        className='text-black font-bold text-2xl block'> {label}  </label>
        <select
        value={state}
        onChange={ e => setState( e.target.value )}
        className=' mt-5 mb-5 w-full p-3 rounded-md '
        >
            <option
            className='border-solid border-slate-600'
            value=""> - Seleccione -</option>

            {options.map(option => (
                <option
                key={option.id}
                value={option.id}>
                {option.nombre}
                </option>
            ))
            }           
        </select>
        </>



    )
    return [ state, SelectMoneda ]
}

export default useSelectMoneda
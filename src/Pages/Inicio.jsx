import React from 'react'
import imagenBitcoin from "../assets/bitco.png"


const Inicio = () => {
  return (
    <div className=' grid grid-cols-1  h-full place-items-center bg-slate-300 ' >

    <div className='h-4/4 w-4/4 text-center'>
      <img 
      className="w-2/4 h-4/4 ml-96 "
      src={imagenBitcoin} alt="" />
    </div>

    <div className=' h-4/4 w-4/4 -mt-36 text-center'>
      <h2 className=' font-black text-4xl text-black p-5'>BitcoApp</h2>
      <h2 className=' text-4xl text-black p-5 underline underline-offset-2'>Tu Cotizador de Criptomonedas</h2>

    </div>
    
    </div>
  )
}

export default Inicio 
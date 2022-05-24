import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {

  const location = useLocation();
  const urlActual = location.pathname;


  
  return (


    <div className=' md:flex md:min-h-screen'>
      
      {/* Grid */}
      <div className=' md:w-1/4 bg-slate-800 px-5 py-10 justify-between'>

        <h2 className='text-4xl font-black text-center text-white hover:border-2 rounded-md border-yellow-500 p-2 transition-all '>
          Bitco<span className='text-yellow-500 '>App</span>
          </h2>

        <nav className='mt-10 mb-5'>

          <Link 
          className={`${urlActual === '/home' ? 'text-gray-400' : 'text-white'} border-solid border-2 p-5 text-2xl block mt-4 rounded-lg hover:text-gray-400 text-center mb-2 hover:border-gray-400`}
          to="/home">
            Inicio
            </Link>

          <Link 
          className={`${urlActual === '/home/cotizador' ? 'text-gray-400' : 'text-white'} border-solid border-2 p-5 text-2xl block mt-4 rounded-lg hover:text-gray-400 text-center mb-2 hover:border-gray-400`}
          to="/home/cotizador">
            Cotizador
            </Link>

          <Link 
          className={`${urlActual === '/home/about' ? 'text-gray-400' : 'text-white'} border-solid border-2 p-5 text-2xl block mt-4 rounded-lg hover:text-gray-400 text-center mb-2 hover:border-gray-400`} 
          to="/home/about">
            Nosotros
            </Link>
          
         

        </nav >

      </div>

      <div className='md:w-3/4'>
        <Outlet/>
      </div>

      
    </div>

    
  )
}

export default Layout 
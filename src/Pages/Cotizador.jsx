import { useState, useEffect } from 'react'

import Formulario from '../Components/Formulario'
import Resultado from '../Components/Resultado'
import Spinner from '../Components/Spinner'

const Cotizador = () => {
  
  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)
  
  //Devolver la cotizacionb
  useEffect(()=>{

    if(Object.keys(monedas).length > 0 ){
      
      const cotizarCrypto = async() =>{
        setCargando(true)
        setResultado({})
        const {moneda, cryptomoneda} = monedas

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptomoneda}&tsyms=${moneda}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        

        setResultado(resultado.DISPLAY[cryptomoneda][moneda])
        setCargando(false)
      }

      cotizarCrypto()
    }

  },[monedas])

  return (
    <div className='grid grid-cols-2 gap-x-4 bg-slate-300 h-full'>


      <div>
        <h2 className='text-black font-bold text-3xl mt-20  text-center pt-24 '>¡Cotiza Criptomonedas  <span className='uppercase text-yellow-800 underline underline-solid '> Al Instante!</span></h2>

        <Formulario
        
        setMonedas={setMonedas}
        />

        
      </div>

      
      <div 
      className='text-black font-bold text-3xl mt-20  text-center  '>


        <h3 className='p-2 pb-3'>Resultados</h3>
        {cargando && <Spinner/>}
        {resultado.PRICE && <Resultado resultado={resultado} />}

         
      </div>
    
    
    </div>
  )
}

export default Cotizador
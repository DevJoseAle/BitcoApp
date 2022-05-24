import React, { useEffect, useState } from 'react'
import useSelectMoneda from '../hooks/useSelectMoneda'
import { monedas } from '../Data/Moneda'

import Error from './Error';



const Formulario = ({setMonedas}) => {

    const [cryptos, setCryptos] = useState([])
    const [errores, setErrores] = useState([false])

    const [moneda, SelectMoneda] = useSelectMoneda('Elige tu Moneda', monedas);
    const [cryptomoneda, SelectCryptomoneda] = useSelectMoneda('Elige tu Cryptomoneda', cryptos);

    useEffect(()=>{
        const consultarApi = async() =>{
          const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
          const res = await fetch(url);
          const resultado = await res.json()
          
          const arrayCriptos = resultado.Data.map((cripto) =>{
            
            const objeto = {
                id: cripto.CoinInfo.Name,
                nombre: cripto.CoinInfo.FullName,
                imagen: cripto.CoinInfo.ImageUrl,

            }

            return objeto
          })
          setCryptos(arrayCriptos)
          // console.log(arrayCriptos)
        }
        consultarApi()
      }, [])
    
    const handleSubmit = (e) =>{
      e.preventDefault();
      
      if([moneda, cryptomoneda].includes('')){
        setErrores(true)

        return
      }
        setErrores(false)
        setMonedas({
          moneda,
          cryptomoneda
        })

    }
  return (
    <>

      <form className='my-20 mx-8 block'
            onSubmit={handleSubmit}
            >

          {errores && <Error>Todos Los Campos son Obligatorios</Error> }
          <SelectMoneda />
          <SelectCryptomoneda />
        

          <input
          className='bg-slate-500 w-5/6 text-white font-bold uppercase p-3 text-lg rounded-lg ml-10 cursor-pointer hover:bg-slate-700 transition ease-in'
          type="submit"
          value="Cotizar"
          />


      </form>
    </>
  )
}


export default Formulario
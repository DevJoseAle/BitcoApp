
import React from 'react';
import PropTypes from 'prop-types'


const Resultado = ({resultado}) => {

    const style3 = 'text-red-500 p-2';

    const{ PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
  return (
      <div className="grid grid-cols-1 ">
    <div
    className='text-black font-bold text-3xl mt-20  text-center  border-2 border-yellow-500 p-8 m-3 content-center '>

    <div
    className=" ml-60 w-32">
        <img src={`https://www.cryptocompare.com${IMAGEURL}`} alt="" />
    </div>
        
    

       <p className="pt-3">El precio ACTUAL es de: <br></br>   
       <span className={style3}>{PRICE}</span> 
        </p>
       <p className="pt-5">El precio MAS ALTO DEL DÍA: <br></br> <span className={style3}>{HIGHDAY}</span> </p>
       <p className="pt-5">El precio MAS BAJO DEL DÍA <br></br><span className={style3}>{LOWDAY}</span> </p>
       <p className="pt-5">El porcentaje de variación <br></br><span className={style3}>{CHANGEPCT24HOUR}%</span> </p>
       <p className="pt-5">Última Actualización:  <br></br><span className={style3}>{LASTUPDATE}</span> </p>

    </div>
    </div>
  )
}

Resultado.propTypes = {
  resultado: PropTypes.object
}


export default Resultado


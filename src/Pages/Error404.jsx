import React from 'react'

import styled from '@emotion/styled'


const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;

`
const Error404style  = styled.h1`
  color: #000000;
  font-size: 200px; 
  

`


const Error404 = () => {
  return (
    <Contenedor>


    <Error404style>Error404</Error404style>
    </Contenedor>
  )
}

export default Error404
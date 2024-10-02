import React from "react";
import styled from "styled-components";


const SpanNombre = styled.span`
  @font-face {
    font-family: 'Amsterdam';
    src: url('../fonts/Amsterdam.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  font-size: 40px;
  max-width: 430px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 20px;
`

function Formulario(){

  return(
    <>
      <SpanNombre>
        Vuestra presencia es el mayor regalo y ese día todo corre de nuestra cuenta y nuestro número de cuenta es:<br></br>
        XXXX-XXXX-XXXX-XXXX<br></br><br></br>
        No olvides rellenar el formulario
      </SpanNombre>
    </>
  )
}

export default Formulario;
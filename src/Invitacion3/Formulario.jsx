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

const ImageBride = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-top: 20px;
  border-radius: 15px;
  margin-bottom: 20px;
`

function Formulario(){

  return(
    <>
      <SpanNombre>
        <span style={{fontFamily: "Montserrat", fontSize: '20px', fontStyle: 'italic'}}>Vuestra presencia es el mayor regalo, asi que, ese día, todo corre de nuestra cuenta y nuestro número de cuenta es:<br></br></span>
        <span style={{fontFamily:'sans-serif', fontSize:'20px', fontStyle:'italic'}}>ES20 2100 6326 1302 0013 9503</span><br></br>
        <ImageBride src="../../../cyj3.jpg" alt="novios"/><br></br>
        <span style={{color: "#42979d"}}>No olvides rellenar el formulario</span>
      </SpanNombre>
    </>
  )
}

export default Formulario;
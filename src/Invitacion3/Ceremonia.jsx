import React from "react";
import styled from "styled-components";

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`

const SpanNombre = styled.span`
  text-align: center;
  @font-face {
    font-family: 'Amsterdam';
    src: url('../fonts/Amsterdam.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  font-size: 40px;
  color: #42979d;
`

const ButtonMapa = styled.button`
  margin-top: 30px;
  width: 150px;
  height: 40px;
  border-radius: 15px;
  border: 0px;
  font-size: 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-color: #c4eef1;
  color: #42979d;
`

function  Ceremonia(){

  const goToMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir//N-110,+40196+La+Lastrilla,+Segovia/@40.9620851,-4.1828137,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd413fe7516d2399:0x86a435ba7b95cefd!2m2!1d-4.1004129!2d40.9621144?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D`;

    // Abre la URL en una nueva pestaña
    window.open(googleMapsUrl, '_blank');
  }

  return(
    <>
      <ContainerInfo>
        <SpanNombre>Finca el Molino de la Venta</SpanNombre>
        <ButtonMapa onClick={() => {goToMaps()}}>Ver en mapa</ButtonMapa>
      </ContainerInfo>
    </>
  )
}

export default Ceremonia;
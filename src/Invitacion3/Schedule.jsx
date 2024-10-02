import React from "react";
import styled from "styled-components";

const ImageSchedule = styled.img`
  width: 120px;
  height: 120px;
`
const SpanScheduleNew = styled.span`
  font-size: 20px;
  font-family: 'Montserrat';
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

function Schedule(){

  const goToMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/place/Parking+Parador+de+la+Granja/@40.9013562,-4.0083217,19z/data=!4m17!1m10!3m9!1s0xd4141e835728425:0x87e0b4d4fb0171c1!2sParador+de+La+Granja!5m2!4m1!1i2!8m2!3d40.9013589!4d-4.0076991!16s%2Fg%2F1wg5z9qk!3m5!1s0xd4141c281b76623:0xa897f85079d7badc!8m2!3d40.9016549!4d-4.0083501!16s%2Fg%2F11c4qph_zd?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D`;

    // Abre la URL en una nueva pestaña
    window.open(googleMapsUrl, '_blank');
  }

  return(
    <>
    <br></br>
    <SpanScheduleNew>Transporte</SpanScheduleNew>
    <SpanScheduleNew>12:15 desde parking</SpanScheduleNew>
    <SpanScheduleNew>parador de la granja</SpanScheduleNew>
    <ButtonMapa onClick={() => {goToMaps()}}>Ver en mapa</ButtonMapa>
    <br></br>
    <SpanScheduleNew>Ceremonia - 13:00</SpanScheduleNew>
    <ImageSchedule src="../../Icono-ceremonia_sin-fondo.png"/>
    <SpanScheduleNew>Cocktail - acto seguido</SpanScheduleNew>
    <ImageSchedule src="../../Icono-coctel_sin-fondo.png"/>
    <SpanScheduleNew>Banquete - 15:45</SpanScheduleNew>
    <ImageSchedule src="../../Icono-banquete_sin-fondo.png"/>
    <SpanScheduleNew>Fiesta - 18:15</SpanScheduleNew>
    <ImageSchedule src="../../Icono-fiesta_sin-fondo.png"/>
    </>
  )
}

export default Schedule;
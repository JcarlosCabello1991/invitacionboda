import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Schedule from "./Schedule";
import Ceremonia from "./Ceremonia";
import Formulario from "./Formulario";
import ModalComponent from "./Modal/Modal";
import ReactAudioPlayer from 'react-audio-player';


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Image = styled.img`
  width: 100%;
  max-width: 430px;
  height: auto;
  margin-top: 50px;
`

const ImageBride = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-top: 20px;
  border-radius: 15px;
  margin-bottom: 20px;
`

const DivDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  gap: 10px;
`

const DateSpan = styled.span`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 50px;
  color: #454545;
  width: 75px;
  text-align: center;
`
const DateSpanWord = styled.span`
  @font-face {
    font-family: 'Amsterdam';
    src: url('../fonts/Amsterdam.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  font-size: 30px;
  color: #454545;
  width: 75px;
  text-align: center;
`

const SpanText = styled.span`
@font-face {
    font-family: 'Amsterdam';
    src: url('../fonts/Amsterdam.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  font-size: 50px;
  padding: 10px 15px;
  text-align: center;
`

const SpanTextInfo = styled.span`
@font-face {
    font-family: 'Amsterdam';
    src: url('../fonts/Amsterdam.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  font-size: 30px;
  padding: 10px 20px;
  text-align: center;
`
const SpanTextYes = styled.span`
@font-face {
    font-family: 'Amsterdam';
    src: url('../fonts/Amsterdam.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  font-size: 40px;
  padding: 10px 20px;
  text-align: center;
`
const SpanTextSave = styled.span`
@font-face {
    font-family: 'Amsterdam';
    src: url('../fonts/Amsterdam.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  font-size: 70px;
  padding: 10px 15px;
  text-align: center;
  margin-top: 30px;
`

function Invitacion3() {

  const fechaObjetivo = new Date('2025-07-12T13:00:00');

  const [date, setDate] = useState({
    dias: "",
    horas:"", 
    minutos:"",
    segundos:""
  });
  const [showNotice, setShowNotice] = useState(true);
  const audioRef = useRef(null);

  const actualizarContador = () => {
    const ahora = new Date();

    // Calcula la diferencia en milisegundos entre las fechas
    const diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {
        // Si la fecha objetivo ha pasado, muestra un mensaje o realiza alguna acción
        console.log('Ya ha pasado la fecha objetivo.');
        return;
    }

    // Calcula días, horas, minutos y segundos
    let segundosTotales = Math.floor(diferencia / 1000);
    let segundos = segundosTotales % 60;
    let minutos = Math.floor(segundosTotales / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    horas %= 24;
    minutos %= 60;
    setDate({
      dias: dias.toString(),
      horas: horas.toString(),
      minutos: minutos.toString(),
      segundos: segundos.toString()
    })

  };

  setInterval(actualizarContador, 1000);

  useEffect(() => {
    actualizarContador();
    //eslint-disable-next-line
  },[]);

  useEffect(() => {
    if(audioRef.current != null && !showNotice){
      audioRef.current.audioEl.current.play()
    }
  },[showNotice]);

  return(
    <Container>
      {
        showNotice && <ModalComponent setShowNotice={setShowNotice} showNotice={showNotice}/>
      }
      <Image src="../../Logo-lineal_SIN-FONDO_pequeño.png" alt="encabezado1"/>
      <SpanTextSave>Save the date</SpanTextSave>
      <div style={{display: 'flex', justifyContent: 'center', width: 'auto', marginBottom: '30px'}}>
        <ReactAudioPlayer 
          ref={audioRef}
          src='../../../perfect.mp3'
          autoPlay={false}
          controls
          progressDisplay="none"
          />
      </div>
      <DivDate>
        <DateSpan>{date.dias}</DateSpan>
        <DateSpan>{date.horas}</DateSpan>
        <DateSpan>{date.minutos}</DateSpan>
        <DateSpan>{date.segundos}</DateSpan>
      </DivDate>
      <DivDate>
        <DateSpanWord>Días</DateSpanWord>
        <DateSpanWord>horas</DateSpanWord>
        <DateSpanWord>Min</DateSpanWord>
        <DateSpanWord>Seg</DateSpanWord>
      </DivDate>
      <ImageBride src="../../../selfieboda.jpg" alt="novios"/>
      <SpanText>
        ¡Nos casamos!
      </SpanText>
      <SpanTextInfo>
        Y nada nos haría más ilusión que compartir con vosotros un día inolvidable en el que nos daremos el <br></br><br></br><SpanTextYes>¡Sí quiero!</SpanTextYes><br></br><br></br> Os esperamos el día 12 de Julio de 2025.<br></br>
        La ceremonia tendrá lugar en La Finca El Molino de la Venta, donde lo celebraremos con una gran fiesta.<br></br>
        Rogamos confirmación, ¡un besazo enorme!
      </SpanTextInfo>
      <Schedule/>
      <Ceremonia/>
      <Formulario/>
    </Container>
  )
}

export default Invitacion3
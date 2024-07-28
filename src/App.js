import './App.css';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import NightlifeIcon from '@mui/icons-material/Nightlife';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import CelebrationIcon from '@mui/icons-material/Celebration';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import CircularProgress from '@mui/material/CircularProgress';
import ReactAudioPlayer from 'react-audio-player';

const CounterContainer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
  `;

  const CounterCell = styled.div`
    height: 50px;
    width: 50px;
    border: 2px solid #efb810;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const CounterSpan = styled.div`
    width: 50px;
    border: 2px solid rgb(253, 253, 218);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #efb810;
  `;

  const Image = styled.img`
    width: auto;
    max-height: 286.66px;
  `;

const ScheduleContainer = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
justify-content: center;
`;

const ScheduleLeftContainer = styled.div`
width: 40%;
text-align: center;
`;

const ScheduleRightContainer = styled.div`
width: 40%;
text-align: center;
`;

const TimesContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
`;

const PlacesContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
`;

const CardContainerFinca = styled.div`
text-align: center;
border: 1px solid #efb810;
border-radius: 6px;
padding: 0px 10px 10px 10px;
box-shadow: 5px 5px 10px #efb810;
height: 200px;
`;

function App() {
  const [formData, setFormData] = useState({
    invitados: '',
    asistencia: '',
    asistenciaPreboda: '',
    cancionSugerida: '',
    intolerancias: 'No',
    bus: '',
    hotel: '',
  });
  const [showDialog, setShowDialog] = useState(false);
  const [charging, setCharging] = useState(false);
  const [date, setDate] = useState({
    dias: "",
    horas:"", 
    minutos:"",
    segundos:""
  });
  const [showNotice, setShowNotice] = useState(true);

  const audioRef = useRef(null);

  const fechaObjetivo = new Date('2025-07-12T13:00:00');

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      setShowDialog(true);
      setCharging(true);
      const postUser = await fetch("https://invitacion-back.vercel.app/invitados/invitado", {
        method:"POST",
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData)
      })
      console.log(postUser)
      if(postUser.status === 200){
        setFormData({
          invitados: '',
          asistencia: '',
          asistenciaPreboda: '',
          cancionSugerida: '',
          intolerancias: 'No',
          bus: '',
          hotel: ''
        });
        setCharging(false);
      }
      
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  const counter = (
    <CounterContainer>
      <CounterCell>{date.dias}</CounterCell>
      <CounterCell>{date.horas}</CounterCell>
      <CounterCell>{date.minutos}</CounterCell>
      <CounterCell>{date.segundos}</CounterCell>
    </CounterContainer>
  );

  const subtitles = (
    <CounterContainer>
      <CounterSpan>Días</CounterSpan>
      <CounterSpan>Horas</CounterSpan>
      <CounterSpan>Min</CounterSpan>
      <CounterSpan>Seg</CounterSpan>
    </CounterContainer>
  );

  const openGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/place/Finca+el+Molino+de+la+Venta/@40.9621184,-4.1029878,17z/data=!3m1!4b1!4m6!3m5!1s0xd413fe7516d2399:0x86a435ba7b95cefd!8m2!3d40.9621144!4d-4.1004129!16s%2Fg%2F11h0b5vz6n?entry=ttu`;

    // Abre la URL en una nueva pestaña
    window.open(googleMapsUrl, '_blank');
  };  

  const fincaCard = (
    <CardContainerFinca>
      <h4 style={{marginBlockEnd: '0.5em'}}>Finca El Molino de la Venta</h4>
      <span style={{fontSize: '20px'}}>N-110, 40196 La Lastrilla, Segovia</span>
      <button
        style={{
          borderRadius: '10px',
          border: '1px solid rgb(237 206 110)',
          backgroundColor: 'rgb(237 206 110)',
          marginTop: '15px'
        }}
        onClick={() => {openGoogleMaps()}}
      >Ver en mapa</button>
    </CardContainerFinca>
  );

  const schedule = (
    <ScheduleContainer>
      <ScheduleLeftContainer>
        <TimesContainer>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px'}}>
            <div style={{
              border: '1px solid #efb810', 
              textAlign: 'center',
              height: '35px',
              width: '35px',
              borderRadius: '100%',
              color: '#efb810',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
              }}>
              <Diversity1Icon/>
            </div>
            <div style={{width: '100px', height: '200px'}}>
              <span>* Ceremonia *<br></br>13:00</span> 
            </div>                        
          </div>   
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px'}}>
            <div style={{
              border: '1px solid #efb810', 
              textAlign: 'center',
              height: '35px',
              width: '35px',
              borderRadius: '100%',
              color: '#efb810',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
              }}>
              <NightlifeIcon/>
            </div>
            <div style={{width: '100px'}}>
              <span>* Cocktail *<br></br>13:00</span> 
            </div> 
          </div> 
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px'}}>
            <div style={{
              border: '1px solid #efb810', 
              textAlign: 'center',
              height: '35px',
              width: '35px',
              borderRadius: '100%',
              color: '#efb810',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
              }}>
              <FoodBankIcon/>
            </div> 
            <div style={{width: '100px'}}>
              <span>* Banquete *<br></br>15:30</span> 
            </div>         
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px'}}>
            <div style={{
              border: '1px solid #efb810', 
              textAlign: 'center',
              height: '35px',
              width: '35px',
              borderRadius: '100%',
              color: '#efb810',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
              }}>
              <CelebrationIcon/>
            </div>       
            <div style={{width: '100px'}}>
              <span>* Fiesta *<br></br>19:00</span>  
            </div>    
          </div>  
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px'}}>
            <div style={{
              border: '1px solid #efb810', 
              textAlign: 'center',
              height: '35px',
              width: '35px',
              borderRadius: '100%',
              color: '#efb810',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
              }}>
              <BedtimeIcon/>
            </div>       
            <div style={{width: '100px'}}>
            <span>* Fin *<br></br>00:00</span>
            </div>    
          </div>    
        </TimesContainer>        
      </ScheduleLeftContainer>
      <Divider orientation="vertical" flexItem />
      <ScheduleRightContainer>
        <PlacesContainer>
          {fincaCard}
        </PlacesContainer>        
      </ScheduleRightContainer>
    </ScheduleContainer>
  );

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    maxWidth: '430px !important',
    bgcolor: 'background.paper',
    border: '2px solid #56F6C1',
    boxShadow: 24,
    p: 4,
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const onClose = () => {
    setShowDialog(false);
  };

  const dialog = (
    <div>
    <Modal
      open={showDialog}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {
          charging ? 
          <CircularProgress/> :
          <>
            <p style={{fontSize: '32px', textAlign: 'center'}}>
            Guardado correctamente!
            </p>
            <button onClick={onClose} style={{backgroundColor: '#56F6C1', border: '0px', borderRadius: '5px', color: 'black', marginLeft:'50px', marginRight: '50px'}}>Aceptar</button>
          </>       
        }
      </Box>
    </Modal>
  </div>
  );

  const closeInvitacion = () => {
    setShowNotice(false);
    if(audioRef.current != null){
      audioRef.current.audioEl.current.play()
    }
  }

  const dialogInvitacion = (
    <div>
    <Modal
      open={showNotice}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {
          charging ? 
          <CircularProgress/> :
          <>
            <p style={{fontSize: '32px', textAlign: 'center'}}>
            Has sido invitado al enlace de <br></br>Cris & Juanqui,<br></br> abre la invitación para ver los detalles!
            </p>
            <button onClick={() => closeInvitacion()} style={{backgroundColor: 'rgb(237, 206, 110)', border: '0px', borderRadius: '5px', color: 'black', marginLeft:'50px', marginRight: '50px'}}>Abrir</button>
          </>       
        }
      </Box>
    </Modal>
  </div>
  );

  const formulario = (
    <>
      {showNotice && dialogInvitacion}
      {showDialog && dialog}
      <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '20px', paddingRight: '20px'}}>
        <label>Nombre del Invitado:</label>
        <input type="text" name="invitados" value={formData.invitados} onChange={handleChange} style={{fontFamily:'sans-serif'}}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '20px', paddingRight: '20px'}}>
        <label>Asistencia:</label>
        <select name="asistencia" value={formData.asistencia} onChange={handleChange}>
          <option value="">Seleccione</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '20px', paddingRight: '20px'}}>
        <label>Asistencia a la preboda:</label>
        <select name="asistenciaPreboda" value={formData.asistenciaPreboda} onChange={handleChange}>
          <option value="">Seleccione</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '20px', paddingRight: '20px'}}>
        <label>Sugerencia de Canción:</label>
        <input type="text" name="cancionSugerida" value={formData.cancionSugerida} onChange={handleChange} style={{fontFamily:'sans-serif'}}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '20px', paddingRight: '20px'}}>
        <label>Si tienes alguna intolerancia alimentaria, indícanos cúal </label>
        <input type="text" name="intolerancias" value={formData.intolerancias} onChange={handleChange} style={{fontFamily:'sans-serif'}}/>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '20px', paddingRight: '20px'}}>
        <label>¿Irás en bus?</label>
        <select name="bus" value={formData.bus} onChange={handleChange}>
          <option value="">Seleccione</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '20px', paddingRight: '20px'}}>
        <label>Tenemos dto en hotel, ¿quieres nuestro hotel?</label>
        <select name="hotel" value={formData.hotel} onChange={handleChange}>
          <option value="">Seleccione</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>
      </div>
      <br></br>
      <button onClick={handleSubmit} style={{backgroundColor: 'rgb(237, 206, 110)', border: '0px', borderRadius: '5px', color: 'black', marginLeft:'20px', marginRight: '20px'}}>Enviar</button>
      <br></br>
    </>    
  );
  return (
    <div className="App">
      <Image src='../selfieboda.jpg' alt='selfie'/>
      {counter}
      {subtitles}
      <div style={{display: 'flex', justifyContent: 'center', width: 'auto'}}>
        <ReactAudioPlayer 
          ref={audioRef}
          src='../perfect.mp3'
          autoPlay={false}
          controls
          progressDisplay="none"
          />
      </div>      
      <p style={{textAlign: 'center', paddingLeft: '20px', paddingRight: '20px'}}>
        Nos complace invitarte a la celebración de nuestra unión, el día 12 de Julio de 2025, la cúal tendrá lugar en la finca: El molino de la venta, en La Lastrilla, Segovia. Nos encantaría disfrutar de este día al lado de los nuestros ¡Y tú no puedes faltar!
      </p>
      <h2 style={{textAlign: 'center', paddingLeft: '20px', paddingRight: '20px'}}>
        Itinerario
      </h2>
      {schedule}
      <p style={{textAlign: 'center', paddingLeft: '20px', paddingRight: '20px'}}>
        Sin vosotros, este día no sería lo mismo y por eso, necesitamos que nos ayudéis a hacer de este día, un día memorable...para ello, por favor, rellena el siguiente formulario y nos ayudarás a que esta experiencia podamos vivirla al máximo.
      </p>
      {formulario}
      <p style={{textAlign: 'center', paddingLeft: '20px', paddingRight: '20px'}}>
        Sabemos lo importante que es la salud y el amor. Por suerte estamos muy sanos, y en cuanto al amor...estamos celebrando lo mucho que nos queremos, asi que hemos decidido que todo corre de nuestra cuenta y nuestro número de cuenta es:<br></br> XXXX-XXXX-XXXX-XXXX
      </p>
    </div>
  );
}

export default App;

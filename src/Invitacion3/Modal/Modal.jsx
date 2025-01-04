import React, { useState } from "react"
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styled from "styled-components";
import './fonts.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  maxWidth: '430px !important',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:'#c4eef1',
};

const ButtonRound = styled.button`
  background-color: #42979d; 
  position: absolute;
  bottom: 15%; /* Ajusta este valor para mantenerlo fijo respecto al contenedor */
  left: 50%;
  transform: translateX(-50%); /* Ajusta para centrar respecto al eje X */
  border: 0px; 
  border-radius: 50%; 
  color: white; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 40px;
  padding-top: 20px;
  text-align: center;
  @font-face {
    font-family: 'Amsterdam';
    src: url('../fonts/Amsterdam.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  };
`

function ModalComponent(props){

  const {
    showNotice,
    setShowNotice
  } = props

  const [charging, setCharging] = useState(false);

  const closeInvitacion = () => {
    setShowNotice(false);
    setCharging(false);
  }

  return(
    <Modal
      open={showNotice}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {
          charging ? 
          <CircularProgress/> :
          <>
            {/* <Paragraph>
              ¡Cris y Juanqui quieren compartir esto contigo!
            </Paragraph> */}
            <img src="../../sobrebg.png" alt="sobre" style={{width:'100%'}}/>
            <ButtonRound onClick={() => closeInvitacion()}>Abrir</ButtonRound>
            {/* <Button onClick={() => closeInvitacion()}>Abrir</Button> */}
          </>       
        }
      </Box>
    </Modal>
  )
}

export default ModalComponent
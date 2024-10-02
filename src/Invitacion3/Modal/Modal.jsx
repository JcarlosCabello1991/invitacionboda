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

const Paragraph = styled.p`
  font-size: 32px;
  text-align: center;
  font-family: 'Montserrat';
`

const Button = styled.button`
  background-color: #42979d; 
  border: 0px; 
  border-radius: 5px; 
  color: white; 
  margin-left:50px; 
  margin-right: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-family: 'Montserrat';
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
            <Paragraph>
              ¡Cris y Juanqui quieren compartir esto contigo!
            </Paragraph>
            <Button onClick={() => closeInvitacion()}>Abrir</Button>
          </>       
        }
      </Box>
    </Modal>
  )
}

export default ModalComponent
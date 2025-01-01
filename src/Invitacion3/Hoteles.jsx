import styled from "styled-components";

const SectionHotel = styled.div`
  @font-face {
      font-family: 'Amsterdam';
      src: url('../fonts/Miama.otf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`

const Span = styled.span`
  font-size: 30px;
`

const SpanHotel = styled.span`
margin-top: 20px;
  font-size: 30px;
  text-decoration: underline;
`

function Hoteles(){

  return(
    <SectionHotel>
      <SpanHotel>
        Hotel Venta Magullo
      </SpanHotel>
      <br></br>
      <Span>
        Este es el hotel propio de la finca donde tendrá lugar nuestro enlace, cocktail, banquete y fiesta, nosotros ya hemos bloqueado algunas habitaciones, para
        facilitar la reserva y hospedaje a aquellos que quieran hospedarse allí el día de la boda.<br></br> Para reservar una habitación a vuestro nombre, solo tendréis que poneros en contacto con
        Sandra (Responsable de Recepción) o cualquiera de sus compañeros, y decirles, que es para la boda de Cris y Juanqui, el coste es de 68€ la habitación doble
        con desayuno incluido.<br></br>
        En caso de que queraís alojaros la noche de la preboda también, comentádselo para poder reservarlo en el momento, ya que no garantizan, que el check-in puedan
        realizarlo la misma mañana de la boda.<br></br><br></br>
        Contacto: Sandra<br></br>
        Teléfono: 92 144 07 63
      </Span>
      <p style={{textAlign: 'center', fontSize: '30px', fontWeight: 'bold'}}>Sitios de interés</p>
      <Span>
        - Los jardines de La Granja de San ildefonso<br></br>
        - La Catedral de Segovia<br></br>
        - El Álcazar<br></br>
      </Span>
    </SectionHotel>    
  )
}

export default Hoteles;
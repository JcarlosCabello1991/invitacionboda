import styled from "styled-components";
import './fontStyleParagraphs.css'

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
  font-size: 20px;
  font-style: italic;
  font-family: 'Montserrat';
  text-align: justify;
`

const SpanHotel = styled.span`
  margin-top: 20px;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  text-decoration: none;
  color: #42979d;
`

function Hoteles(){

  return(
    <SectionHotel>
      <SpanHotel>
        Hotel Venta Magullo
      </SpanHotel>
      <br></br>
      <Span>
        Este es el hotel propio de la finca donde tendrá lugar nuestro día. Para los que venís de fuera, la finca nos guarda unas habitaciones, por si os queréis quedar allí esos días.<br></br>
        Las tarifas son:<br></br><br></br>
        - Habitación doble: 68€.<br></br>
        - Habitación doble de uso individual: 53€.<br></br>
        - Habitación doble con cama supletoria: 83€ (Bajo disponibilidad).<br></br>
        Estos precios incluyen IVA, además estos precios incluyen desayuno continental como cortesía<br></br>
        <br></br> Para reservar una habitación, solo tendréis que llamar al teléfono <strong>92 143 50 11</strong>, y decirles, que es para la boda de Cris y Juanqui.<br></br><br></br> 
        El hotel no puede garantizar el check-in antes de las 14:00 horas, por lo que os recomendamos que vengáis a disfrutar de la preboda y os alojéis desde el viernes.<br></br><br></br>
        Si lo preferís también podéis alojaros en algún hotel/hostal de La Granja<br></br>
      </Span>
      <p style={{textAlign: 'center', fontSize: '30px', fontWeight: 'bold', color: "#42979d"}}>Sitios de interés, por si el domingo seguís con fuerzas</p>
      <Span style={{fontSize: '18px', textAlign: 'justify'}}>
        - Real Fábrica de Cristales de La Granja<br></br>
        - Los Jardines del Palacio Real de La Granja de San Ildefonso<br></br>
        - El Palacio Real de La Granja<br></br>
        - El Acueducto de Segovia<br></br>
        - La Catedral de Segovia<br></br>
        - El Álcazar de Segovia<br></br>
      </Span>
      <p style={{textAlign: 'center', fontSize: '40px', fontWeight: 'bold', color: "#42979d"}}>Gracias por formar parte de nuestro gran día</p>
    </SectionHotel>    
  )
}

export default Hoteles;
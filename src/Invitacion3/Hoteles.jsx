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
        Este es el hotel propio de la finca donde tendrá lugar nuestro día. Para los que venís de fuera, la finca nos guarda unas habitaciones, por si os queréis quedar allí esos días. El coste es de 68€ la habitación doble
        con desayuno incluido.<br></br> Para reservar una habitación, solo tendréis que llamar al teléfono <strong>92 144 07 63</strong>, y decirles, que es para la boda de Cris y Juanqui.<br></br><br></br> 
        El hotel no puede garantizar el check-in antes de las 14:00 horas, por lo que os recomendamos que vengáis a disfrutar de la preboda y os alojéis desde el viernes.<br></br><br></br>
        Si lo preferís también podéis alojaros en algún hotel/hostal de La Granja<br></br>
      </Span>
      <p style={{textAlign: 'center', fontSize: '30px', fontWeight: 'bold', color: "#42979d"}}>Sitios de interés, por si el domingo seguís con fuerzas</p>
      <Span style={{fontSize: '18px'}}>
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
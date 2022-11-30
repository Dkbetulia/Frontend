import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
  return (
    <Carousel
    className="mh-50">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/sliders/slider1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Café Orgánico La Montaña</h3>
          <p>Recarga tus mañanas con la energía del campo, activa tu día con la naturaleza.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/sliders/slider2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Cacao Orgánico La Montaña</h3>
          <p>Iniciar tu día con una buen taza de chocolate, siempre será tu mejor opción.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;

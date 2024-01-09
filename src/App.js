import { Carousel, Container } from "react-bootstrap";
import PlayersList from "./components/playersList/PlayersList";

function App() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/messi.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Vitara 2023</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/ronaldo.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Suzuki 2022</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/neymar.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Suzuki 2022</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container>
        <PlayersList />
      </Container>
    </>
  );
}

export default App;

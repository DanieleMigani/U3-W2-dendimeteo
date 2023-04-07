import { Container, Row, Col } from 'react-bootstrap';

const MyFooter = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-light myFooter">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              <strong>Dendimeteo-Daniele Migani</strong> - Copyright {year}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;

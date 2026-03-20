import { Navbar, Container } from 'react-bootstrap';

const CustomNavbar = ({ brandName }) => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">{brandName}</Navbar.Brand>
    </Container>
  </Navbar>
);

export default CustomNavbar;
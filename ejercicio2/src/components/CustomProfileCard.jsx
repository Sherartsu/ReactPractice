import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const CustomProfileCard = ({ nombre, edad, profesion, ciudad, fotoUrl }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }} className="shadow-sm">
      <Card.Img variant="top" src={fotoUrl || "https://via.placeholder.com/150"} />
      <Card.Body>
        <Card.Title className="text-primary">{nombre}</Card.Title>
        <Card.Text>
          Información detallada del usuario:
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><strong>Edad:</strong> {edad} años</ListGroup.Item>
        <ListGroup.Item><strong>Profesión:</strong> {profesion}</ListGroup.Item>
        <ListGroup.Item><strong>Ciudad:</strong> {ciudad}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default CustomProfileCard;